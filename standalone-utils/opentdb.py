import ast
import html
file1 = open('question-list.txt', 'r')

#Mapping categories to id in db
categories = {
    "General Knowledge": 1,
    "Entertainment: Books": 2,
    "Entertainment: Film": 3,
    "Entertainment: Music": 4,
    "Entertainment: Musicals & Theatres": 5,
    "Entertainment: Television": 6,
    "Entertainment: Video Games": 7,
    "Entertainment: Board Games": 8,
    "Science & Nature": 9,
    "Science: Computers": 10,
    "Science: Mathematics": 11,
    "Mythology": 12,
    "Sports": 13,
    "Geography": 14,
    "History": 15,
    "Politics": 16,
    "Art": 17,
    "Celebrities": 18,
    "Animals": 19,
    "Vehicles": 20,
    "Entertainment: Comics": 21,
    "Science: Gadgets": 22,
    "Entertainment: Japanese Anime & Manga": 23,
    "Entertainment: Cartoon & Animations": 24}

while True:
    line = file1.readline()

    if not line:
        break
    dictline = ast.literal_eval(line)

    #Destructuring
    question = html.unescape(dictline.get('question'))
    answer = html.unescape(dictline.get('correct_answer'))
    category = html.unescape(dictline.get('category'))
    incorrect_answers = dictline.get('incorrect_answers')
    incorrect_answer_1 = html.unescape(incorrect_answers[0])
    incorrect_answer_2 = None
    incorrect_answer_3 = None
    if len(incorrect_answers) > 1:
        incorrect_answer_2 = html.unescape(incorrect_answers[1])
    if len(incorrect_answers) > 2:
        incorrect_answer_3 = html.unescape(incorrect_answers[2])
    difficulty = html.unescape(dictline.get('difficulty'))


    print("category: {0}".format(categories[category]))
    # print("answer: {0}".format(answer))
    # print("incorrect_answer_1: {0}".format(str(incorrect_answer_1)))
    # print("incorrect_answer_2: {0}".format(incorrect_answer_2))
    # print("incorrect_answer_3: {0}".format(incorrect_answer_3))
file1.close()
