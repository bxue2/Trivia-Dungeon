from app.models import db, Question, Category, Set

def seed_categories():
    category1 = Category(name='General Knowledge')
    category2 = Category(name='Books')
    category3 = Category(name='Film')
    category4 = Category(name='Music')
    category5 = Category(name='Musicals and Theaters')
    category6 = Category(name='TV')
    category7 = Category(name='Video Games')
    category8 = Category(name='Board Games')
    category9 = Category(name='Natural Science')
    category10 = Category(name='Computers')
    category11 = Category(name='Math')
    category12 = Category(name='Mythology')
    category13 = Category(name='Sports')
    category14 = Category(name='Geography')
    category15 = Category(name='History')
    category16 = Category(name='Politics')
    category17 = Category(name='Art')
    category18 = Category(name='Celebrities')
    category19 = Category(name='Animals')
    category20 = Category(name='Vehicles')
    category21 = Category(name='Comics')
    category22 = Category(name='Gadgets')
    category23 = Category(name='Anime and Manga')
    category24 = Category(name='Cartoons and Animation')
    category25 = Category(name='Other')

    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)
    db.session.add(category7)
    db.session.add(category8)
    db.session.add(category9)
    db.session.add(category10)
    db.session.add(category11)
    db.session.add(category12)
    db.session.add(category13)
    db.session.add(category14)
    db.session.add(category15)
    db.session.add(category16)
    db.session.add(category17)
    db.session.add(category18)
    db.session.add(category19)
    db.session.add(category20)
    db.session.add(category21)
    db.session.add(category22)
    db.session.add(category23)
    db.session.add(category24)
    db.session.add(category25)


def seed_questions():
    question1 = Question(
                    question='What temperature does ice melt (in Celsius)?',
                    answer='0 degrees',
                    incorrect_answer_1='32 degrees',
                    incorrect_answer_2='100 degrees',
                    incorrect_answer_3='98 degrees',
                    difficulty=1,
                    user_id=2,
                    category_id=9
                )
    question2 = Question(
                    question='What is the 11th element in the periodic table?',
                    answer='Na (Sodium)',
                    incorrect_answer_1='Mg (Magnesium)',
                    incorrect_answer_2='Fe (Iron)',
                    incorrect_answer_3='Al (Aluminum)',
                    difficulty=2,
                    user_id=2,
                    category_id=9
                )

    question3 = Question(
                    question='What year did Germany invade Poland, starting WWII?',
                    answer='1939',
                    incorrect_answer_1='1935',
                    incorrect_answer_2='1941',
                    incorrect_answer_3='1932',
                    difficulty=2,
                    user_id=2,
                    category_id=15
    )

    db.session.add(question1)
    db.session.add(question2)
    db.session.add(question3)

    db.session.commit()

def undo_questions():
    db.session.execute('TRUNCATE questions RESTART IDENTITY CASCADE;')
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
