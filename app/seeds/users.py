from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    admin = User(username='admin', email='admin@trivia.io', password='sd2fds8aW')

    demo = User(username='Demo', email='demo@aa.io',
                password='password')

    user1 = User(username='CornedApple', email='corn@aa.io',
                password='d0892nvs')

    user2 = User(username='FlatulentBear', email='bear@aa.io',
                password='df2erfgd4')

    user3 = User(username='HelloWorld', email='world@aa.io',
                password='v09i2kxff')

    db.session.add(admin)
    db.session.add(demo)
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
