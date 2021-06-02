from app.models import db, QuestionComment

def seed_qcomments():

    qcomment1 = QuestionComment(
                    comment='Nice question',
                    rating=5,
                    user_id=1,
                    question_id=1
                )

    db.session.add(qcomment1)

    db.session.commit()

def undo_qcomments():
    db.session.execute('TRUNCATE question_comments RESTART IDENTITY CASCADE;')
    db.session.commit()
