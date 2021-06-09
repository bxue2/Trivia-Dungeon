import React, { useEffect, useState, useCallback } from 'react';
import {useParams, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import TriviaRender from '../TriviaRender';
import { getQuestionsFromSet } from '../../store/questions';
import './SetsPage.css';

const SetsPage = () => {
    const {id} = useParams();
    const history = useHistory();
    const questions = useSelector(state => state.questions.questions)
    const dispatch = useDispatch();
    const [replay, setReplay] = useState(true)
    const [loaded, setLoaded] = useState(false)
    const [set, setSet] = useState({})

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
    <div className='sets-page'>
        <h1>{set.name}</h1>
        <h3>Created By: {set.username}</h3>
        <TriviaRender setReplay={setReplay} loaded={loaded} question={questions[0]} next={true}/>
    </div>)
}

export default SetsPage;
