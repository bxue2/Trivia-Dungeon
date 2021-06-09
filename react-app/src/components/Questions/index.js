import React, {useState, useEffect, useCallback} from 'react'
// import QuestionList from './QuestionList'
import AddQuestion from './AddQuestion'
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import ListComponent from '../ListComponent';
import QuestionListRow from './QuestionListRow';

import './Questions.css'

const Questions = () => {
    const user = useSelector(state => state.session.user);
    const [questions, setQuestions] = useState([])
    const [editQuestion, setEditQuestion] = useState(null)

    const [showForm, setShowForm] = useState(false);

    const getQuestions = useCallback(async () => {
        const response = await fetch(`/api/questions/user/${user.id}`)
        const data = await response.json()
        // if(data.errors){
        // } else{
        setQuestions(data.questions);
        // }
    }, [user.id])

    useEffect(() => {
        getQuestions();
    }, [getQuestions])

    useEffect(()=> {
        if(editQuestion){
            setShowForm(true);
        }
    }, [editQuestion])

    return (
        <div className='questions-container'>
            <h1 className='page-header'>Questions</h1>
            <p className='page-subheader'>Submit your own questions to add them to the database!</p>
            {/* <QuestionList questions={questions} getQuestions={getQuestions} setEditQuestion={setEditQuestion}/> */}
            <ListComponent title={"Submitted Questions"}>
                {questions.map((question, idx) => {
                        return (
                            <QuestionListRow question={question} getQuestions={getQuestions} setEditQuestion={setEditQuestion} key={idx}/>
                        )})
                }
            </ListComponent>
            <button className='add-question-button' onClick={() => setShowForm(true)}>Add Question</button>
            {showForm && (
                <Modal onClose={() => setShowForm(false)}>
                    <AddQuestion setShowForm={setShowForm} editQuestion={editQuestion} setEditQuestion={setEditQuestion} getQuestions={getQuestions}/>
                </Modal>
            )}

        </div>
    )
}

export default Questions;
