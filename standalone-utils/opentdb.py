import ast
import html
file1 = open('question-list.txt', 'r')

categories = {"General Knowledge": 1, "Entertainment: Japanese Anime & Manga": 3}

while True:
    line = file1.readline()

    if not line:
        break
    dictline = ast.literal_eval(line)

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
    print("question: {0}".format(question))
    print("answer: {0}".format(answer))
    print("incorrect_answer_1: {0}".format(str(incorrect_answer_1)))
    print("incorrect_answer_2: {0}".format(incorrect_answer_2))
    print("incorrect_answer_3: {0}".format(incorrect_answer_3))
file1.close()
