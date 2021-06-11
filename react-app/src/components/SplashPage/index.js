import React from 'react'
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import door from '../../pictures/dungeon_door_tp.png'
import './SplashPage.css'
const SplashPage = () => {
    const user = useSelector(state => state.session.user);
    const history = useHistory()

    // useEffect(() => {
    //     if(user){
    //         history.push('/random')
    //     }
    // }, [user])
    return (
    <div className='splash-container'>
        <img alt='dungeon door' className='dungeon-door-bg' src={door}/>
        <div className='splash-info'>
            <div className='trivia-header'>Welcome to the Trivia Dungeon</div>
            <div className='trivia-subheader'>Sign up to submit your own questions and create question sets.</div>
            <div className='trivia-options'>
                <button className='splash-button' onClick={() => history.push('/random')}>
                    {!user && 'Try some random questions'}
                    {user && 'Enter the dungeon...'}
                </button>
                {!user && <button className='splash-button' onClick={() => {document.querySelector('.signup-button').click()}}>Sign up for an account</button>}
            </div>
        </div>
    </div>)
}

export default SplashPage;
