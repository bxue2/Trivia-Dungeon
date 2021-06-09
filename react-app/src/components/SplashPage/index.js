import React from 'react'
import door from '../../pictures/dungeon_door_tp.png'
import './SplashPage.css'
const SplashPage = () => {
    return (
    <div className='splash-container'>
        Splash Page
        <div className='splash-info'>
            <div className='trivia-header'>Welcome to the Trivia Dungeon</div>
            <div>Sign up to submit your own questions and create question sets.</div>
        </div>
        <img className='dungeon-door-bg' src={door}/>
    </div>)
}

export default SplashPage;
