import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TriviaRender from '../TriviaRender';

import {getRandomQuestions} from '../../store/questions'

import './SplashPage.css'

const SplashPage = () => {
    const questions = useSelector(state => state.questions.questions)
    const dispatch = useDispatch();
    useEffect(() => {
        if(questions.length === 0){
            dispatch(getRandomQuestions())
        }
    }, [questions, dispatch])

    console.log(questions[0]);
    return (
        <>
            <div className='splash-page'>
                <h1> Welcome to the Trivia Dungeon!!!</h1>
                <h2>Play some random questions:</h2>
                <TriviaRender question={questions[0]}/>
            </div>
        </>
    )
}

export default SplashPage;
