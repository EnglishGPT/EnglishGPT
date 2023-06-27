from flask import request, jsonify
from flask_login import login_user
from functools import wraps
from app.modules.user.user_model import User

def decode_auth_token(auth_token):
    try:
        # This line assumes that you have a decode_auth_token method in your User model
        user_id = User.decode_auth_token(auth_token)
        return user_id
    except Exception as e:
        return str(e)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return jsonify({"message": "Token is missing"}), 403

        auth_token = auth_header.split(" ")[1]
        resp = decode_auth_token(auth_token)

        if isinstance(resp, str):
            return jsonify({"message": "Token is invalid"}), 403

        current_user = User.query.filter_by(id=resp).first()
        if current_user:
            login_user(current_user)
            return f(current_user, *args, **kwargs)

        return jsonify({"message": "User not found"}), 403

    return decorated
