import React from 'react';

const QuestionListRow = ({question}) => {
    console.log(question)
    return (
        <div className='question-list-row'>
            <p className='question-display'>Question: {question.question}</p>
            <div className='question-row_button-container'>
                <button className='edit-button'>Edit</button>
                <button className='delete-button'>Delete</button>
            </div>
        </div>
    )
}

export default QuestionListRow;
