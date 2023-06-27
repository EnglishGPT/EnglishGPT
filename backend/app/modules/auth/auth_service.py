from werkzeug.security import generate_password_hash, check_password_hash
from app.modules.user.user_model import User, UserType
from app.utils.db import db

class AuthService:
    def register_user(self, data):
        email = data.get("email")
        password = data.get("password")
        user_type = data.get("type")

        if not email or not password or not user_type:
            return None, "Missing email, password, or user type", 400

        existing_user = User.query.filter_by(email=email).first()

        if existing_user:
            return None, "User already exists", 409

        hashed_password = generate_password_hash(password)
        new_user = User(email=email, password=hashed_password, user_type=UserType(user_type))
        db.session.add(new_user)
        db.session.commit()

        auth_token = new_user.encode_auth_token(new_user.id)
        
        return auth_token, "User registered successfully", new_user.to_dict(), 201


    def authenticate_user(self, data):
        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return None, "Missing email or password", 400

        user = User.query.filter_by(email=email).first()

        if not user or not check_password_hash(user.password, password):
            return None, "Invalid email or password", 401

        # Generate the auth token here
        auth_token = user.encode_auth_token(user.id)

        return auth_token, "User authenticated successfully", user.to_dict(), 200