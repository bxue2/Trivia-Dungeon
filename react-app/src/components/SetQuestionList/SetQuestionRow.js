import React from 'react'
import useHistory from 'react-router-dom';
const SetQuestionRow = ({question}) => {
    const history = useHistory();

    const viewQuestion = () => {
        history.push(`/questions/${question.id}`)
    }

    const removeQuestion = () => {

    }
    return (
        <div className='set-question-row'>
            <p className='set-question-display'>Question: {question.question}</p>
            <div className='set-question-row_button-container'>
                <button className='view-button question-row_action-button' onClick={viewQuestion}>View</button>
                {getQuestions && <button className='delete-button question-row_action-button' onClick={removeQuestion} >Remove</button>}

            </div>
        </div>
    )
}

export default SetQuestionRow;
