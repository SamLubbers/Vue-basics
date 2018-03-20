"""models for the database of our backend"""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.Text, unique=True, nullable=False)
    name = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f'<User {self.name}>'

    def __str__(self):
        return self.name
