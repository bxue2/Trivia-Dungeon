from app.models import db, QuestionComment

def seed_qcomments():
    
    qcomment1 = QuestionComment(
                    comment='Nice question',
                    rating=5,
                    user_id=2,
                    question_id=1
                )

    qcomment2 = QuestionComment(
                    comment='Bad question',
                    rating=1,
                    user_id=3,
                    question_id=1
                )

    qcomment3 = QuestionComment(
                    comment='OK question',
                    rating=3,
                    user_id=4,
                    question_id=1
                )

    db.session.add(qcomment1)
    db.session.add(qcomment2)
    db.session.add(qcomment3)

    db.session.commit()

def undo_qcomments():
    db.session.execute('TRUNCATE question_comments RESTART IDENTITY CASCADE;')
    db.session.commit()
