from app import models
from app.models import db, Set, set_questions

def seed_sets():

    set1 = Set(
        name='Demo Set',
        user_id=2
    )
    db.session.add(set1)
    db.session.commit()

    adds1q1 = set_questions.insert().values(set_id=1, question_id=1)
    adds1q2 = set_questions.insert().values(set_id=1, question_id=2)
    adds1q3 = set_questions.insert().values(set_id=1, question_id=3)
    db.session.execute(adds1q1)
    db.session.execute(adds1q2)
    db.session.execute(adds1q3)
    # set_question_1 = SetQuestion(
    #     question_id=1,
    #     set_id=1
    # )
    # set_question_2 = SetQuestion(
    #     question_id=2,
    #     set_id=1
    # )

    # db.session.add(set_question_1)
    # db.session.add(set_question_2)

    db.session.commit()

def undo_sets():
    db.session.execute('TRUNCATE sets RESTART IDENTITY CASCADE;')
    # db.session.execute('TRUNCATE set_questions RESTART IDENTITY CASCADE;')
    db.session.commit()
