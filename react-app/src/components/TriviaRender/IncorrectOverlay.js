import React from 'react'
import incorrect from '../../pictures/incorrect_icon_512px.png'

const IncorrectOverlay = ({setAnswered}) => {
    return (
        <div className='incorrect-overlay'>
            <img alt='Incorrect Answer' src={incorrect} className="incorrect-logo"/>
            <div>
                Incorrect Answer...
            </div>
            <button className='retry-button' onClick={() => setAnswered(0)}>Retry</button>
        </div>
    )
}

export default IncorrectOverlay;
