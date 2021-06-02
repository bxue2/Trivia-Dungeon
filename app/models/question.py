from .db import db
from datetime import datetime

class Question(db.Model):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, primary_key = True)
    question = db.Column(db.String(800), nullable = False, unique = True)
    answer = db.Column(db.String(255), nullable = False)
    incorrect_answers = db.Column(db.ARRAY(db.String(255)), nullable = False)
    difficulty = db.Column(db.Integer, nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable = False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", back_populates="question")
    category = db.relationship("Category", back_populates="question")
    qcomment = db.relationship("QuestionComment", back_populates="question")

    sets = db.relationship("Set",
                secondary="set_question",
                back_populates="questions")

    def to_dict(self):
        return {
            "id": self.id,
            "question": self.question,
            "answer": self.answer,
            "incorrectAnswers": self.incorrect_answers,
            "difficulty": self.difficulty,
            "userId": self.user_id,
            "categoryId": self.category_id,
        }
