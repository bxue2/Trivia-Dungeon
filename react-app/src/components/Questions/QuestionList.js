import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import QuestionListRow from './QuestionListRow';

const QuestionList = () => {
    const user = useSelector(state => state.session.user);
    const [questions, setQuestions] = useState([])

    let questionRows =  (
        <div className='loading-questions'>
            {/* Loading... */}
        </div>
    );

    const getQuestions = async () => {
        const response = await fetch(`/api/questions/user/${user.id}`)
        const data = await response.json()
        if(data.errors){
            questionRows = (
                <div className='loading-failed'>
                    Error occured while fetching data...
                </div>
            )
        } else{
            setQuestions(data.questions);
        }
    }

    useEffect(() => {
        getQuestions();
    }, [])

    return (
        <div className='question-list-container'>
            <h1>Submitted Questions</h1>
            {questions.length == 0 && questionRows}
            {questions.map((question, idx) => {
                    return (
                        // <div key={idx}> Hi </div>
                        <QuestionListRow question={question} key={idx}/>
                    )})
            }

        </div>
    )
}

export default QuestionList;
