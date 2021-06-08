import React from 'react';

const QuestionInfo = ({question}) => {
    const difficultyMap = ["Easy", "Medium", "Hard"]

    return (
        <div className='trivia-info'>
            <div>
                Category: {question && question.category && question.category.name}
            </div>
            <div>
                Difficulty: {question && difficultyMap[question.difficulty-1]}
            </div>
        </div>
    )
}

export default QuestionInfo;
