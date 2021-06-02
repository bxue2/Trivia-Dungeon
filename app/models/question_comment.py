from .db import db

class QuestionComment(db.Model):
    __tablename__ = 'question_comments'

    id = db.Column(db.Integer, primary_key = True)
    comment = db.Column(db.String(800), nullable = False)
    rating = db.Column(db.Integer, nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable = False)

    user = db.relationship("User", back_populates="qcomment")
    question = db.relationship("Question", back_populates="qcomment")
