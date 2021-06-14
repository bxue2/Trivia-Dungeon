# Need to pip install requests
# Run this by itself to generate question-list.txt
# Put generated question-list.txt in seeds folder so opentdb.py can seed it into the db
# API info here: https://opentdb.com/api_config.php
import requests

# category ids on opentdb, mapping to ordering in questions.py seed
# Might consider fetching category mappings from "https://opentdb.com/api_category.php"
category_order = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

#Creates session so opentdb knows not to repeat questions
getsession = requests.get("https://opentdb.com/api_token.php?command=request")
token = getsession.json().get('token')


f = open('question-list.txt', 'w')
for category in category_order:
    #get 100 questions per category
    for i in range(4):
        response = requests.get("https://opentdb.com/api.php?amount=50&token={0}&category={1}".format(token, category))
        data = response.json()

        if(data.get('response_code')) == 0:
            for question in data.get('results'):
                f.write(str(question) + '\n')
        # Some categories don't have enough and return diff response code
        else:
            response = requests.get("https://opentdb.com/api.php?amount=20&token={0}&category={1}".format(token, category))
            data = response.json()
            print("Reach 1")
            if(data.get('response_code')) == 0:
                for question in data.get('results'):
                    f.write(str(question) + '\n')
f.close()
