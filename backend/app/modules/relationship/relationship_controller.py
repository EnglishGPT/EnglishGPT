from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.modules.user.user_model import User
from flask_cors import cross_origin
from app.modules.auth.auth_middleware import token_required  # Import your decorator
from app.modules.relationship.relationship_model import Relationship
from app.utils.db import db
# import sys

relationship_blueprint = Blueprint("relationship", __name__, url_prefix='/relationship')

@relationship_blueprint.route('/generate-hashcode', methods=['GET'])
@token_required
def generate_hashcode(current_user):
    return jsonify({'hashcode': current_user.generate_hashcode()}), 200


@relationship_blueprint.route('/relationship-request', methods=['POST'])
@token_required
def send_relationship_request(current_user):
    hashcode = request.json.get('hashcode')
    related_user = User.query.filter_by(hashcode=hashcode).first()
    if not related_user:
        return jsonify({'message': 'User not found'}), 404
    relationship = Relationship(user_id=current_user.id, related_user_id=related_user.id, status='pending')
    db.session.add(relationship)
    db.session.commit()
    return jsonify({'message': 'Request sent'}), 200


@relationship_blueprint.route('/pending-requests', methods=['GET'])
@token_required
def get_pending_requests(current_user):
    requests = Relationship.query.filter_by(user_id=current_user.id, status='pending').all()
    return jsonify([r.to_dict() for r in requests]), 200


@relationship_blueprint.route('/accept-request/<int:request_id>', methods=['POST'])
@token_required
def accept_request(current_user, request_id):
    request = Relationship.query.get(request_id)
    if request and request.user_id == current_user.id:
        request.status = 'accepted'
        db.session.commit()
        return jsonify({'message': 'Request accepted'}), 200
    return jsonify({'message': 'Request not found'}), 404


@relationship_blueprint.route('/decline-request/<int:request_id>', methods=['POST'])
@token_required
def decline_request(current_user, request_id):
    request = Relationship.query.get(request_id)
    if request and request.user_id == current_user.id:
        request.status = 'declined'
        db.session.commit()
        return jsonify({'message': 'Request declined'}), 200
    return jsonify({'message': 'Request not found'}), 404


@relationship_blueprint.route('/user/relationships/<int:userId>', methods=['GET'])
@token_required
def get_user_relationships(current_user, userId):
    if current_user.id != userId:
        return jsonify({'message': 'Unauthorized'}), 403

    relationships = Relationship.query.filter_by(user_id=userId).all()
    return jsonify([r.to_dict() for r in relationships]), 200
