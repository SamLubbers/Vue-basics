from flask import Flask


def create_app():
    app = Flask(__name__)
    app.config['DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    register_db(app)
    register_views(app)

    return app


def register_db(app):
    from .model import db
    db.init_app(app)

    @app.before_first_request
    def create_db():
        db.create_all()


def register_views(app):
    from .api import api
    app.register_blueprint(api)
