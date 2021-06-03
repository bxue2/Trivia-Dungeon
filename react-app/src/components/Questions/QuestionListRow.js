import React from 'react';

const QuestionListRow = ({question}) => {
    return (
        <div className='question-list-row'>
            <p>{question.id}</p>
            <button className='edit-button'>Edit</button>
            <button className='delete-button'>Delete</button>
        </div>
    )
}

export default QuestionListRow;
