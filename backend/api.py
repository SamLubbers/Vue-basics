#!/usr/bin/env python3
from flask import jsonify, make_response, abort, request, Blueprint
from sqlalchemy.exc import IntegrityError
from .model import User, db
from .helpers import object_as_dict

users = Blueprint('users', __name__, url_prefix='/api/v1.0/users')

@users.route('/<email>', methods=['GET'])
def get_user(email):
    user = User.query.filter_by(email=email).first_or_404()

    return jsonify({'user': object_as_dict(user)})

@users.route('/', methods=['GET'])
def get_all_users():
    users = User.query.all()
    if not users:
        abort(404)

    return jsonify([object_as_dict(user) for user in users])

@users.route('/', methods=['POST'])
def create_user():
    if not request.json or not 'email' or not 'name' in request.json:
        abort(400)

    try:
        user = User(email=request.json['email'], name=request.json['name'])
        db.session.add(user)
        db.session.commit()
    except IntegrityError:
        return jsonify({'error':'user with this email already exists'}), 409

    return jsonify({'user': object_as_dict(user)}), 201

@users.route('/<email>', methods=['DELETE'])
def delete_user(email):
    user = User.query.filter_by(email=email).first_or_404()

    db.session.delete(user)
    db.session.commit()

    return jsonify({'deleted': True}), 204

@users.errorhandler(404)
def not_found(e):
    return make_response(jsonify({'error':'not found'}), 404)

@users.errorhandler(400)
def bad_request(e):
    return make_response(jsonify({'error':'bad request'}), 400)

@users.errorhandler(405)
def invalid_method(e):
    return jsonify({'error':'method not allowed for the requested URL'}), 405
