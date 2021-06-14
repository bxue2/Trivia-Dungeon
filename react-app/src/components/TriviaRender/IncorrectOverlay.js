import React from 'react'
import incorrect from '../../pictures/incorrect_icon_512px.png'
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import {goToNextQuestion} from '../../store/questions'

const IncorrectOverlay = ({setAnswered, next, qid}) => {
    const dispatch = useDispatch();
    const history = useHistory();

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
            {next && <button className='action-button' onClick={() => history.push(`/questions/${qid}`)}>View Question Page</button>}
        </div>
    )
}

export default IncorrectOverlay;
