import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import AddToSet from '../AddToSet'
import { Modal } from '../../context/Modal';

const QuestionListRow = ({question, getQuestions, setEditQuestion}) => {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

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
        <>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <AddToSet qid={question.id}/>
            </Modal>
        )}
        <div className='question-list-row'>
            <p className='question-display'>Question: {question.question}</p>
            <div className='question-row_button-container'>
                <button className='view-button' onClick={viewQuestion}>View</button>
                <button className='question-row_add-set-button' onClick={() => setShowModal(true)}>Add to Set</button>
                {setEditQuestion && <button className='edit-button' onClick={openEditForm}>Edit</button>}
                {getQuestions && <button className='delete-button' onClick={deleteQuestion} >Delete</button>}

            </div>
        </div>
        </>
    )
}

export default QuestionListRow;
