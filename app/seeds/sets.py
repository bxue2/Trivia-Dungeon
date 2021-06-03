from app.models import db, Set, SetQuestion

def seed_sets():

    set1 = Set(
        name='Science Set',
        user_id=2
    )
    db.session.add(set1)
    db.session.commit()

    set_question_1 = SetQuestion(
        question_id=1,
        set_id=1
    )
    set_question_2 = SetQuestion(
        question_id=2,
        set_id=1
    )

    db.session.add(set_question_1)
    db.session.add(set_question_2)

    db.session.commit()

def undo_sets():
    db.session.execute('TRUNCATE sets RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE set_questions RESTART IDENTITY CASCADE;')
    db.session.commit()
