from .db import db
from datetime import datetime

class Question(db.Model):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, primary_key = True)
    question = db.Column(db.String(800), nullable = False, unique = True)
    answer = db.Column(db.String(255), nullable = False)
    incorrect_answers = db.Column(db.Array(db.String(255)), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable = False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", back_populates="question")
    category = db.relationship("Category", back_populates="question")
