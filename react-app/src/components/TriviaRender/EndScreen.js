import React from 'react';

const EndScreen = ({replay=false, newSet=false}) => {
    return (
        <div className='result-overlay'>
            <h1>Set Completed</h1>
            {replay && <button>Replay</button>}
            {newSet && <button>Start New Set</button>}
        </div>
    )
}

export default EndScreen;
