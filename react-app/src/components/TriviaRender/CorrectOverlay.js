import React from 'react'
import correct from '../../pictures/correct_icon_512px.png'
import {useDispatch} from 'react-redux';
import {goToNextQuestion} from '../../store/questions'

const CorrectOverlay = ({setAnswered, next}) => {
    const dispatch = useDispatch();
    return (
        <div className='result-overlay'>
            <img alt='Correct Answer' src={correct} className="incorrect-logo"/>
            <div>
                Correct Answer!
            </div>
            {!next &&<button className='action-button' onClick={() => setAnswered(0)}>Close</button>}
            {next &&
                <button className='action-button' onClick={() => {
                    setAnswered(0)
                    dispatch(goToNextQuestion())
                }}>Next</button>
            }
        </div>
    )
}

export default CorrectOverlay;
