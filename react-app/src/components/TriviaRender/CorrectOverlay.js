import React from 'react'
import correct from '../../pictures/correct_icon_512px.png'

const CorrectOverlay = () => {
    return (
        <div className='correct-overlay'>
            <img src={correct} className="incorrect-logo"/>
            <div>
                Correct Answer!
            </div>
        </div>
    )
}

export default CorrectOverlay;
