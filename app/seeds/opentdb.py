file1 = open('question-list.txt', 'r')

while True:
    line = file1.readline()

    if not line:
        break
    dictline = ast.literal_eval(line)

    question = dictline.get('question')
    answer = dictline.get('correct_answer')
    category = dictline.get('category')
    incorrect_answers = dictline.get('incorrect_answers')
    difficulty = dictline.get('difficulty')
    print(category)
    print(incorrect_answers)

file1.close()
