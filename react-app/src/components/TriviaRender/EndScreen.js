import React from 'react';

const EndScreen = ({setReplay=null, newSet=false}) => {
    return (
        <div className='result-overlay'>
            <h1>Set Completed</h1>
            {setReplay && <button className='action-button' onClick={() => setReplay(true)}>Replay</button>}
            {newSet && <button>Start New Set</button>}
        </div>
    )
}

export default EndScreen;
