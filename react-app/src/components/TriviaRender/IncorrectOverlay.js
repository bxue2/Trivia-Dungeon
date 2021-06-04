import React from 'react'
import incorrect from '../../pictures/incorrect_icon_512px.png'

const IncorrectOverlay = () => {
    return (
        <div className='incorrect-overlay'>
            <img src={incorrect} className="incorrect-logo"/>
            <div>
                Incorrect Answer!
            </div>
        </div>
    )
}

export default IncorrectOverlay;
