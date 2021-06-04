import React from 'react'
import correct from '../../pictures/correct_icon_512px.png'

const CorrectOverlay = ({setAnswered}) => {
    return (
        <div className='correct-overlay'>
            <img src={correct} className="incorrect-logo"/>
            <div>
                Correct Answer!
            </div>
            <button className='close-button' onClick={() => setAnswered(0)}>Close</button>
        </div>
    )
}

export default CorrectOverlay;
