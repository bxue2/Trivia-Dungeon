import React, { useEffect, useState, useCallback } from 'react';
import {useParams} from 'react-router-dom';

import TriviaRender from '../TriviaRender';
import CommentSection from './CommentSection';

import './QuestionPage.css'

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
        <div className='question-page'>
            <TriviaRender question={question}/>
            <CommentSection question={question}/>
        </div>
    )
}

export default QuestionPage;
