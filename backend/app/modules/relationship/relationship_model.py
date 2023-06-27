from app.utils.db import db
from enum import Enum
from sqlalchemy import Enum as SQLEnum

class RelationshipType(Enum):
    affiliate = "affiliate"
    friend = "friend"
    own = "own"

class RelationshipStatus(Enum):
    pending = "pending"
    accepted = "accepted"
    declined = "declined"

class Relationship(db.Model):
    __tablename__ = 'relationships'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    related_user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    relationship_type = db.Column(SQLEnum(RelationshipType), nullable=False)  
    status = db.Column(SQLEnum(RelationshipStatus), nullable=False)  

    user = db.relationship('User', foreign_keys=[user_id])
    related_user = db.relationship('User', foreign_keys=[related_user_id])
    
    def to_dict(self):
        relatedUser = self.related_user.to_dict()
        return {
            'id': self.id,
            'relationshipType': self.relationship_type.value,
            'status': self.status.value,
            'relatedUser': relatedUser
        }
