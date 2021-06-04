import React from 'react'

const TriviaRender = ({question}) => {
    return (
        <div className='trivia-render-container'>
            <div className='question-section'>
                {question.question}
            </div>
            <div className='answer-section'>
                
            </div>
        </div>
    )
}
