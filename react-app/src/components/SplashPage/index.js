import React from 'react'
import door from '../../pictures/dungeon_door_tp.png'
import './SplashPage.css'
const SplashPage = () => {
    return (
    <div className='splash-container'>
        Splash Page
        <div className='trivia-header'>Welcome to the Trivia Dungeon</div>
        <img className='dungeon-door-bg' src={door}/>
    </div>)
}

export default SplashPage;
