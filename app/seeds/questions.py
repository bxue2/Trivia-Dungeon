from app.models import db, Question, Category

def seed_questions():

    category1 = Category(name='Science')
    question1 = Question(
                    question='What temperature does ice melt (in Celsius)?',
                    answer='0 degrees',
                    incorrect_answers=['32 degrees', '100 degrees', '98 degrees'],
                    difficulty=1,
                    user_id=1,
                    category_id=1
                )
    question2 = Question(
                    question='What is the 11th element in the periodic table?',
                    answer='Na (Sodium)',
                    incorrect_answers=['Mg (Magnesium)', 'Fe (Iron)', 'Al (Aluminum)'],
                    difficulty=2,
                    user_id=1,
                    category_id=1
                )

    db.session.add(category1)
    db.session.add(question1)
    db.session.add(question2)

    db.session.commit()

def undo_questions():
    db.session.execute('TRUNCATE questions RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
