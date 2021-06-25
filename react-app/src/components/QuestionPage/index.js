import React, { useEffect, useState, useCallback } from 'react';
import {useParams, useHistory } from 'react-router-dom';

import TriviaRender from '../TriviaRender';
import CommentSection from './CommentSection';

import './QuestionPage.css'

const QuestionPage = () => {
    const {id} = useParams();
    const history = useHistory();

    const [question, setQuestion] = useState({})

    const getQuestions = useCallback(async () => {
        const response = await fetch(`/api/questions/${id}`);
        const questionInfo = await response.json();
        if(questionInfo.errors){
            history.push('/');
        }
        else{
            setQuestion(questionInfo);
            // console.log(questionInfo)
        }
    }, [id, history]);

    useEffect(() => {
        getQuestions();
    }, [getQuestions])

    return (
        <div className='question-page'>
            {question && (
                <>
                    <h1 className='question-page-header'>Question #{question.id}</h1>
                    <h1 className='question-page-header'>Submitted by: {question.username}</h1>
                </>
            )}
            <TriviaRender question={question} next={false}/>
            <CommentSection question={question}/>
        </div>
    )
}

export default QuestionPage;
