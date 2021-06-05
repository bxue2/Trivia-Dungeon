# Need to pip install requests
import requests

response = requests.get("https://opentdb.com/api.php?amount=10")
data = response.json()

print(data.get('results'))

for question in data.get('results'):
    f = open('question-list.txt', 'a')
    f.write(str(question) + '\n')
    f.close()
