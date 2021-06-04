import React from 'react'

const IncorrectOverlay = () => {
    return (
        <div className='incorrect-overlay'>
            <i className="fas fa-times-circle"></i>
            <div>
                Incorrect Answer!
            </div>
        </div>
    )
}

export default IncorrectOverlay;
