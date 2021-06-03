import React from 'react';

const QuestionListRow = ({question, getQuestions, setEditQuestion}) => {

    const deleteQuestion = async () => {
        const response = await fetch(`/api/questions/${question.id}`, {
            method: 'DELETE'
        })
        // const deleted = await response.json();
        getQuestions();
    }

    const openEditForm = () => {
        setEditQuestion(question);
    }

    return (
        <div className='question-list-row'>
            <p className='question-display'>Question: {question.question}</p>
            <div className='question-row_button-container'>
                <button className='edit-button' onClick={openEditForm}>Edit</button>
                <button className='delete-button' onClick={deleteQuestion} >Delete</button>
            </div>
        </div>
    )
}

export default QuestionListRow;
