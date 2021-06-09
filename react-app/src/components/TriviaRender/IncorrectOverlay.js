import React from 'react'
import incorrect from '../../pictures/incorrect_icon_512px.png'
import {useDispatch} from 'react-redux';
import {goToNextQuestion} from '../../store/questions'

const IncorrectOverlay = ({setAnswered, next}) => {
    const dispatch = useDispatch();
    return (
        <div className='result-overlay'>
            <img alt='Incorrect Answer' src={incorrect} className="incorrect-logo"/>
            <div>
                Incorrect Answer...
            </div>
            <button className='action-button' onClick={() => setAnswered(0)}>Retry</button>
            {next && <button className='action-button' onClick={() => {
                setAnswered(0)
                dispatch(goToNextQuestion())
            }}>Skip</button>}
        </div>
    )
}

export default IncorrectOverlay;
