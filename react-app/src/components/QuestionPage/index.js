import React, { useEffect, useState, useCallback } from 'react';
import {useParams} from 'react-router-dom';


import CommentSection from './CommentSection';

const QuestionPage = () => {
    const {id} = useParams();

    const [question, setQuestion] = useState({})

    const getQuestions = useCallback(async () => {
        const response = await fetch(`/api/questions/${id}`);
        const questionInfo = await response.json();
        setQuestion(questionInfo);
    }, [id]);

    useEffect(() => {
        getQuestions();
    }, [getQuestions])

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
