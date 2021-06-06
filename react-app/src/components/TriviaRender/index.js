import React, {useEffect, useState} from 'react'

import AnswerButton from './AnswerButton';
import CorrectOverlay from './CorrectOverlay';
import IncorrectOverlay from './IncorrectOverlay';
import './TriviaRender.css'

//next controls if there's a next button or not (disabled if on the question page)
const TriviaRender = ({question, next}) => {
    //0=not answered, 1=correct, 2=wrong
    const [answered, setAnswered] = useState(0);
    const [answerList, setAnswerList] = useState([]);


    useEffect(() => {
        if(question){
            const randomizeAnswers = () => {
                if(answered === 0){
                    let answers = [];
                    if(question.incorrectAnswers){
                        //Setup answers array
                        answers.push(question.answer);
                        question.incorrectAnswers.forEach((incorrect) => {
                            if(incorrect.length > 0){
                                answers.push(incorrect);
                            }
                        })

                        //Shuffle answers array
                        for(let i = answers.length - 1; i > 0; i--){
                            let randomIndex = Math.floor(Math.random() * (i + 1));
                            [answers[i], answers[randomIndex]] = [answers[randomIndex], answers[i]];
                        }
                    }
                    setAnswerList(answers);
                }
            }
            randomizeAnswers();
        }
    }, [answered, question])

    return (
        <div className='trivia-render-container'>
            <>
                {answered === 1 && (
                    <CorrectOverlay setAnswered={setAnswered} next={next}/>
                )}
                {answered === 2 && (
                    <IncorrectOverlay setAnswered={setAnswered}/>
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
                <div className='trivia-info'>
                    Category: {question && question.categoryId}
                </div>
            </>
        </div>
    )
}

export default TriviaRender;
