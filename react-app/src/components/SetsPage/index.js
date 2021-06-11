import React, { useEffect, useState, useCallback } from 'react';
import {useParams, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import TriviaRender from '../TriviaRender';
import { getQuestionsFromSet } from '../../store/questions';
import { Modal } from '../../context/Modal';
import SetQuestionList from '../SetQuestionList'
import './SetsPage.css';

const SetsPage = () => {
    const {id} = useParams();
    const history = useHistory();
    const questions = useSelector(state => state.questions.questions)
    const dispatch = useDispatch();
    const [replay, setReplay] = useState(true)
    const [loaded, setLoaded] = useState(false)
    const [set, setSet] = useState({})
    const [showQuestions, setShowQuestions] = useState(false);

    useEffect(() => {
        if(replay){
            dispatch(getQuestionsFromSet(id))
            setReplay(false)
        }
    }, [dispatch, id, replay])

    useEffect(() => {
        if(questions.length !== 0){
            setLoaded(true)
        }
    }, [questions, setLoaded])

    const getSets = useCallback(async () => {
        const response = await fetch(`/api/sets/${id}`);
        const setInfo = await response.json();
        if(setInfo.errors){
            history.push('/');
        }
        else{
            setSet(setInfo);
        }
    }, [id, history]);

    useEffect(() => {
        getSets();
    }, [getSets])

    return (
        <>
            <div className='sets-page'>
                <h1>{set.name}</h1>
                <h3>Created By: {set.username}</h3>
                <TriviaRender setReplay={setReplay} loaded={loaded} question={questions[0]} next={true}/>
                <div className='question-list-button' onClick={() => setShowQuestions(true)}>See Questions</div>
            </div>
            {showQuestions && (
                <Modal onClose={() => {
                    setShowQuestions(false)
                }}>
                    <div className='set-question-list-container'>
                        <SetQuestionList set={set}/>
                        <button className='close-modal-button' onClick={() => setShowQuestions(false)}>Close</button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default SetsPage;
