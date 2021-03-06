from .db import db
from .set_questions import set_questions

class Set(db.Model):
    __tablename__ = 'sets'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    user = db.relationship("User", back_populates="set")

    questions = db.relationship("Question",
                    secondary=set_questions,
                    back_populates="sets")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "userId": self.user_id,
            "username": self.user.username
        }

    def to_dict_qid(self, qid):
        checkQuery = self.query.filter(set_questions.c.set_id == self.id, set_questions.c.question_id == qid).first()
        found = checkQuery is not None
        return {
            "id": self.id,
            "name": self.name,
            "userId": self.user_id,
            "username": self.user.username,
            "contain": found
        }
