from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    admin = User(username='admin', email='admin@trivia.io', password='sd2fds8aW')

    demo = User(username='Demo', email='demo@trivia.io',
                password='s2fsax9aD')

    user1 = User(username='CornedApple', email='corn@trivia.io',
                password='d0892nvs')

    user2 = User(username='FlatulentBear', email='bear@trivia.io',
                password='df2erfgd4')

    user3 = User(username='HelloWorld', email='world@trivia.io',
                password='v09iSdxff')

    user4 = User(username='JoeSchmo', email='joe@trivia.io',
                password='v09ia#kxff')

    user5 = User(username='GoodBot', email='good@trivia.io',
                password='v09i2kFff')

    user6 = User(username='BadBot', email='bad@trivia.io',
                password='ds82jssdS28')

    user7 = User(username='MehBot', email='meh@trivia.io',
                password='v09f5i2Dxff')


    db.session.add(admin)
    db.session.add(demo)
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
