import React from 'react'
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
const SetQuestionRow = ({set, question, setLoaded}) => {
    const user = useSelector(state => state.session.user)
    const history = useHistory();

    const viewQuestion = () => {
        history.push(`/questions/${question.id}`)
    }

    const removeQuestion = async (e) => {
        e.preventDefault();
        await fetch(`/api/sets/${set.id}/question/${question.id}`, {
            method: 'DELETE'
        })
        setLoaded(false);
    }
    return (
        <div className='set-question-row'>
            <div className='set-question-display'>Question: {question.question}</div>
            <div className='set-question-row_button-container'>
                <button className='view-button question-row_action-button' onClick={(e) => viewQuestion(e)}>View</button>
                {user && user.id === set.userId &&
                    <button className='delete-button question-row_action-button' onClick={(e) => removeQuestion(e)} >Remove</button>
                }
            </div>
        </div>
    )
}

export default SetQuestionRow;
