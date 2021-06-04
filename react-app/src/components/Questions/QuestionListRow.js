import React from 'react';
import {useHistory} from 'react-router-dom';

const QuestionListRow = ({question, getQuestions, setEditQuestion}) => {
    const history = useHistory();

    const deleteQuestion = async () => {
        await fetch(`/api/questions/${question.id}`, {
            method: 'DELETE'
        })
        // const deleted = await response.json();
        getQuestions();
    }

    const openEditForm = () => {
        setEditQuestion(question);
    }

    const viewQuestion = () => {
        history.push(`/questions/${question.id}`);
    }

    return (
        <div className='question-list-row'>
            <p className='question-display'>Question: {question.question}</p>
            <div className='question-row_button-container'>
                <button className='view-button' onClick={viewQuestion}>View</button>
                <button className='edit-button' onClick={openEditForm}>Edit</button>
                <button className='delete-button' onClick={deleteQuestion} >Delete</button>
            </div>
        </div>
    )
}

export default QuestionListRow;
