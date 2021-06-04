import React from 'react';

const AnswerButton = ({answer, correct, setAnswered}) => {
    return (
        <div className='answer-button' onClick={() => setAnswered(correct ? 1 : 2)}>
            {answer}
        </div>
    )
}

export default AnswerButton;
