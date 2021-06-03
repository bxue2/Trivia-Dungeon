import React from 'react';

import QuestionListRow from './QuestionListRow';

const QuestionList = ({questions, getQuestions}) => {


    let questionRows =  (
        <div className='loading-questions'>
            {/* Loading... */}
        </div>
    );

    return (
        <div className='question-list-container'>
            <h1>Submitted Questions</h1>
            {questions.length == 0 && questionRows}
            {questions.map((question, idx) => {
                    return (
                        // <div key={idx}> Hi </div>
                        <QuestionListRow question={question} getQuestions={getQuestions} key={idx}/>
                    )})
            }

        </div>
    )
}

export default QuestionList;
