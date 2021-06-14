import React from 'react'
import correct from '../../pictures/correct_icon_512px.png'
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import {goToNextQuestion} from '../../store/questions'

const CorrectOverlay = ({setAnswered, next, qid}) => {
    const dispatch = useDispatch();
    const history = useHistory();
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
            {next && <button className='action-button' onClick={() => history.push(`/questions/${qid}`)}>View Question Page</button>}
        </div>
    )
}

export default CorrectOverlay;
