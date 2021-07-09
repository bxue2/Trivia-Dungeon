# Trivia-Dungeon

Trivia Dungeon is a trivia app, where users can submit questions to the site's database, create custom sets of questions, search through other people's questions, and play through a few rounds of trivia.

### Heroku Link: https://trivia-dungeon.herokuapp.com/

### Documentation: https://github.com/bxue2/Trivia-Dungeon/wiki

### Screenshots

Home Page:

![Displaying Home page](https://github.com/bxue2/Trivia-Dungeon/blob/main/wiki/trivia-dungeon-home.png?raw=true)

Trivia Rendering:

![Displaying Home page](https://github.com/bxue2/Trivia-Dungeon/blob/main/wiki/trivia-dungeon-demo.png?raw=true)

### Features:
- Login/Sign up users or Explore as a demo user
- Submit trivia questions for yourself/others to use, or edit/delete them
- Leave/Edit/Delete ratings/comments on questions
- Create/edit custom sets of questions to play through
- Search for trivia questions/sets
- Play through randomly selected questions, or filter by category/difficulty

### Code Snippets

Because the trivia function needed to be reused across multiple pages, I created a more generic Trivia Render component. Various props are used to control its behaviour, since it might change based on what page its being called from. The controls for what question gets displayed is also put separately in a Redux store, separating the View from the Model to make things more modular.
```
<div className='trivia-render-container'>
    {user && <button className='open-add-set' onClick={() => setShowModal(true)}>Add to/Remove from Sets</button>}
    {answered === 1 && (
        <CorrectOverlay setAnswered={setAnswered} next={next} qid={question.id}/>
    )}
    {answered === 2 && (
        <IncorrectOverlay setAnswered={setAnswered} next={next} qid={question.id}/>
    )}
    <div className='question-section'>
        {question && question.question}
    </div>
    <div className='answer-section'>
        {question && answerList.map((answer, idx) => {
            let correct = (answer === question.answer);
            return <AnswerButton correct={correct} setAnswered={setAnswered} answer={answer} key={idx}/>
        })}
    </div>
    {questions.length === 0 && !question && loaded && (<EndScreen setReplay={setReplay}/>)}
    <QuestionInfo question={question}/>
</div>
```
