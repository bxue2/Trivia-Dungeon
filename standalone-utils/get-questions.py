# Need to pip install requests
# Run this by itself to generate question-list.txt
# Put generated question-list.txt in seeds folder so opentdb.py can seed it into the db

import requests
import ast

response = requests.get("https://opentdb.com/api.php?amount=10")
data = response.json()

print(data.get('results'))

for question in data.get('results'):
    f = open('question-list.txt', 'a')
    f.write(str(question) + '\n')
    f.close()
