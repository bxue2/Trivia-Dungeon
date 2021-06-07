from .db import db

set_questions = db.Table('set_questions',
    db.Model.metadata,
    db.Column("set_id", db.Integer, db.ForeignKey('sets.id'), primary_key=True),
    db.Column("question_id", db.Integer, db.ForeignKey('questions.id'), primary_key=True)
)



# from .db import db

# class SetQuestion(db.Model):
#     __tablename__ = 'set_questions'

#     id = db.Column(db.Integer, primary_key = True)
#     question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable = False)
#     set_id = db.Column(db.Integer, db.ForeignKey('sets.id'), nullable = False)

#     def to_dict(self):
#         return {
#             "id": self.id,
#             "questionId": self.question_id,
#             "setId": self.set_id
#         }
