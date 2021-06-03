import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

const QuestionListRow = ({question}) => {
    return (
        <div className='question-list-row'>
            <h1>Questions</h1>
            <button className='edit-button'>Edit</button>
            <button className='delete-button'>Delete</button>
        </div>
    )
}

export default QuestionListRow;
