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

    db.session.commit()

    set2 = Set(
        name='Some Set',
        user_id=3
    )
    db.session.add(set2)
    db.session.commit()

    adds2q1 = set_questions.insert().values(set_id=1, question_id=58)
    adds2q2 = set_questions.insert().values(set_id=1, question_id=1002)
    adds2q3 = set_questions.insert().values(set_id=1, question_id=459)
    adds2q4 = set_questions.insert().values(set_id=1, question_id=632)
    db.session.execute(adds2q1)
    db.session.execute(adds2q2)
    db.session.execute(adds2q3)
    db.session.execute(adds2q4)

    db.session.commit()

    set3 = Set(
        name='Another Set',
        user_id=5
    )
    db.session.add(set3)
    db.session.commit()

    adds3q1 = set_questions.insert().values(set_id=1, question_id=881)
    adds3q2 = set_questions.insert().values(set_id=1, question_id=1543)
    adds3q3 = set_questions.insert().values(set_id=1, question_id=223)
    adds3q4 = set_questions.insert().values(set_id=1, question_id=457)
    db.session.execute(adds3q1)
    db.session.execute(adds3q2)
    db.session.execute(adds3q3)
    db.session.execute(adds3q4)

    db.session.commit()

def undo_sets():
    db.session.execute('TRUNCATE sets RESTART IDENTITY CASCADE;')
    # db.session.execute('TRUNCATE set_questions RESTART IDENTITY CASCADE;')
    db.session.commit()
