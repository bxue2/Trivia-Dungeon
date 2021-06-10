import React from 'react'
import useHistory from 'react-router-dom';
const SetQuestionRow = ({set, question, getQuestions}) => {
    const history = useHistory();

    const viewQuestion = () => {
        history.push(`/questions/${question.id}`)
    }

    const removeQuestion = () => {
        await fetch(`/api/sets/${set.id}/question/${question.id}`, {
            method: 'DELETE'
        })
        getQuestions();
    }
    return (
        <div className='set-question-row'>
            <p className='set-question-display'>Question: {question.question}</p>
            <div className='set-question-row_button-container'>
                <button className='view-button question-row_action-button' onClick={viewQuestion}>View</button>
                <button className='delete-button question-row_action-button' onClick={removeQuestion} >Remove From Set</button>

            </div>
        </div>
    )
}

export default SetQuestionRow;
