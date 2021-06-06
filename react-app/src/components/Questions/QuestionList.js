import React from 'react';

import QuestionListRow from './QuestionListRow';

const QuestionList = ({questions, getQuestions, setEditQuestion}) => {

    let questionRows =  (
        <div className='loading-questions'>
            {/* Loading... */}
        </div>
    );

    return (
        <div className='question-list-container'>
            <h1>Submitted Questions</h1>
            <div className='question-list-rows-container'>
                {questions.length === 0 && questionRows}
                {questions.map((question, idx) => {
                        return (
                            <QuestionListRow question={question} getQuestions={getQuestions} setEditQuestion={setEditQuestion} key={idx}/>
                        )})
                }
            </div>

        </div>
    )
}

export default QuestionList;
