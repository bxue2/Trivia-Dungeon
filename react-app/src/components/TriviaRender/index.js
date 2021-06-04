import React, {useEffect, useState} from 'react'

import AnswerButton from './AnswerButton';
import './TriviaRender.css'

const TriviaRender = ({question}) => {
    const randomizeAnswers = () => {
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

        return answers;
    }

    return (
        <div className='trivia-render-container'>
            <div className='question-section'>
                {question.question}
            </div>
            <div className='answer-section'>
                {randomizeAnswers().map((answer, idx) => {
                    return <AnswerButton answer={answer} key={idx}/>
                })}
            </div>
        </div>
    )
}

export default TriviaRender;
