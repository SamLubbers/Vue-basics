from flask import Flask, jsonify

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    register_db(app)
    register_views(app)
    register_error_handlers(app)

    return app


def register_db(app):
    from .model import db
    db.init_app(app)

    @app.before_first_request
    def create_db():
        db.create_all()


def register_views(app):
    from .api import users
    app.register_blueprint(users)

def register_error_handlers(app):
    @app.errorhandler(404)
    def not_found(e):
        return jsonify({'error': 'not found'}), 404

    @app.errorhandler(400)
    def bad_request(e):
        return jsonify({'error': 'bad request'}), 400

    @app.errorhandler(405)
    def invalid_method(e):
        return jsonify({'error': 'method not allowed for the requested URL'}), 405
