from app.models import db, QuestionComment
import random

def seed_qcomments():

    # qcomment1 = QuestionComment(
    #                 comment='Nice question',
    #                 rating=5,
    #                 user_id=7,
    #                 question_id=1
    #             )

    # qcomment2 = QuestionComment(
    #                 comment='Bad question',
    #                 rating=1,
    #                 user_id=8,
    #                 question_id=1
    #             )

    # qcomment3 = QuestionComment(
    #                 comment='OK question',
    #                 rating=3,
    #                 user_id=9,
    #                 question_id=1
    #             )

    # db.session.add(qcomment1)
    # db.session.add(qcomment2)
    # db.session.add(qcomment3)

    randomComment = [
        "A bit confusing",
        "Are you sure this is right?",
        "I don't get it",
        "Fun question",
        "Interesting",
        "Too easy",
        "Too hard",
        "Not bad",


    ]

    for i in range(1, 2000):
        prevUser = -1
        prevnum = -1
        for j in range(2):
            #-1, 0 is no comment
            num = random.randint(-1, 6)
            if num == 1 and prevnum != 1:
                qcomment = QuestionComment(
                        comment='OK question',
                        rating=3,
                        user_id=9,
                        question_id=i
                )
                db.session.add(qcomment)
                prevnum = 1
            if num == 2 and prevnum != 2:
                qcomment = QuestionComment(
                    comment='Bad question',
                    rating=1,
                    user_id=8,
                    question_id=i
                )
                db.session.add(qcomment)
                prevnum = 2
            if num == 3 and prevnum != 3:
                qcomment = QuestionComment(
                    comment='Nice question',
                    rating=5,
                    user_id=7,
                    question_id=i
                )
                db.session.add(qcomment)
                prevnum = 3
            if num > 3:
                #Prevent same user from commenting twice
                if prevUser == -1:
                    prevUser = random.randint(1,5)
                else:
                    prevUser = ((prevUser + 1) % 6) + 1
                qcomment = QuestionComment(
                    comment=randomComment[random.randint(0, len(randomComment) - 1)],
                    rating=random.randint(1,5),
                    user_id=prevUser,
                    question_id=i
                )
                db.session.add(qcomment)
                prevnum = 4
            db.session.commit()

def undo_qcomments():
    db.session.execute('TRUNCATE question_comments RESTART IDENTITY CASCADE;')
    db.session.commit()
