from app.utils.db import db
from flask_login import UserMixin
from sqlalchemy.dialects.postgresql import BYTEA
from enum import Enum
from sqlalchemy import Enum as SQLEnum
import jwt
from datetime import datetime, timedelta
from flask import current_app

class UserType(Enum):
    student = "student"
    parent = "parent"
    teacher = "teacher"
    admin = "admin"

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    user_type = db.Column(SQLEnum(UserType), nullable=False)
    first_name = db.Column(db.String(80), nullable=True)
    last_name = db.Column(db.String(80), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    profile_image = db.Column(BYTEA, nullable=True)

    study_progress = db.Column(db.Integer, nullable=False, default=0)
    vocabularies_studied = db.Column(db.Integer, nullable=True)
    stories_read = db.Column(db.Integer, nullable=True)
    stories_shared = db.Column(db.Integer, nullable=True)

    initiated_relationships = db.relationship('Relationship', foreign_keys='Relationship.user_id', lazy='dynamic')
    received_relationships = db.relationship('Relationship', foreign_keys='Relationship.related_user_id', lazy='dynamic')

    knowledge_power = db.Column(db.Float, nullable=False, default=0.0)
    energy_power = db.Column(db.Float, nullable=False, default=0.0)

    tokens_available = db.Column(db.Integer, nullable=True, default=0)


    def __init__(self, email, password, user_type):
        self.email = email
        self.password = password
        self.user_type = user_type

    def __repr__(self):
        return f'<User {self.first_name} {self.last_name}>'

    def encode_auth_token(self, user_id):
        payload = {
            'exp': datetime.utcnow() + timedelta(days=1),
            'iat': datetime.utcnow(),
            'sub': user_id
        }
        return jwt.encode(payload, current_app.config.get('SECRET_KEY'), algorithm='HS256')
        
    @staticmethod
    def decode_auth_token(auth_token):
        payload = jwt.decode(auth_token, current_app.config.get('SECRET_KEY'), algorithms=["HS256"])
        return payload['sub']

    def to_dict(self):
        return {
            'id': self.id,
            'user_type': self.user_type.value,  # Convert Enum to string
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'study_progress': self.study_progress,
            'vocabularies_studied': self.vocabularies_studied,
            'stories_read': self.stories_read,
            'stories_shared': self.stories_shared,
            'knowledge_power': self.knowledge_power,
            'energy_power': self.energy_power,
            'tokens_available': self.tokens_available,
            # Convert other fields as necessary
            # 'profile_image': Convert this as necessary
        }
    
