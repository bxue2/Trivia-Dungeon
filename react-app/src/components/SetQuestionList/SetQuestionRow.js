import React from 'react'
import {useHistory} from 'react-router-dom';
const SetQuestionRow = ({set, question, setLoaded}) => {
    const history = useHistory();

    const viewQuestion = () => {
        history.push(`/questions/${question.id}`)
    }

    const removeQuestion = async () => {
        await fetch(`/api/sets/${set.id}/question/${question.id}`, {
            method: 'DELETE'
        })
        setLoaded(false);
    }
    return (
        <div className='set-question-row'>
            <div className='set-question-display'>Question: {question.question}</div>
            <div className='set-question-row_button-container'>
                <button className='view-button question-row_action-button' onClick={viewQuestion}>View</button>
                <button className='delete-button question-row_action-button' onClick={removeQuestion} >Remove</button>

            </div>
        </div>
    )
}

export default SetQuestionRow;
