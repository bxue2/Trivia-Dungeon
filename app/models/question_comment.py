from .db import db
from datetime import datetime

class QuestionComment(db.Model):
    __tablename__ = 'question_comments'

    id = db.Column(db.Integer, primary_key = True)
    comment = db.Column(db.String(800), nullable = False)
    rating = db.Column(db.Integer, nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable = False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", back_populates="qcomment")
    question = db.relationship("Question", back_populates="qcomment")

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "rating": self.rating,
            "userId": self.user_id,
            "questionId": self.question_id,
            "updatedAt": self.updated_at,
            "user": self.user.to_dict()
        }
