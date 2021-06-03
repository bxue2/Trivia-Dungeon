import React from 'react';

const QuestionList = () => {

    const getQuestions = () => {
        const response = fetch('/api/questions/')
    }

    return (
        <div className='question-list-container'>
            <h1>Submitted Questions</h1>

        </div>
    )
}

export default QuestionList;
