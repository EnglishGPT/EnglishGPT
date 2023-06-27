from flask import Blueprint, request, jsonify
from .auth_service import AuthService

auth_blueprint = Blueprint("auth", __name__)
auth_service = AuthService()

@auth_blueprint.route("/signup", methods=["POST"])
def signup():
    data = request.json
    print(data)
    result, message, user, status_code = auth_service.register_user(data)
    return jsonify({"message": message, "auth_token": result, "user": user}), status_code

@auth_blueprint.route("/signin", methods=["POST"])
def signin():
    data = request.json
    result, message, user, status_code = auth_service.authenticate_user(data)
    return jsonify({"message": message, "auth_token": result, "user": user}), status_code
