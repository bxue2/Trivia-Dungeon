import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';


import CommentSection from './CommentSection';

const QuestionPage = () => {
    const {id} = useParams();

    const [question, setQuestion] = useState({})

    useEffect(async () => {
        const response = await fetch(`/api/questions/${id}`);
        const questionInfo = await response.json();
        setQuestion(questionInfo);
    }, [])

    return (
        <div>
            <div className='trivia-question-container'>
                {question.question}
            </div>
            <CommentSection question={question}/>
        </div>
    )
}

export default QuestionPage;
