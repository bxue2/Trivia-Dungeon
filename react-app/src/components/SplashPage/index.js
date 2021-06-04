import React from 'react';
import {useSelector} from 'react-redux';
import TriviaRender from '../TriviaRender';


const SplashPage = () => {
    const questions = useSelector(state => state.questions.questions)
    return (
        <>
            <div className='splash-page'>
                <h1> Welcome to the Trivia Dungeon!!!</h1>
                <h2>Play some random questions:</h2>
                {/* <TriviaRender /> */}
            </div>
        </>
    )
}

export default SplashPage;
