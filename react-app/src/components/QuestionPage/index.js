import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import CommentSection from './CommentSection';

const QuestionPage = () => {
    const {id} = useParams();
    const [question, setQuestion] = useState({})
    const [showForm, setShowForm] = useState(false);

    useEffect(async () => {
        const response = await fetch(`/api/questions/${id}`);
        const questionInfo = await response.json();
        console.log(questionInfo);
        setQuestion(questionInfo);
    }, [])

    return (
        <div>
            <div className='trivia-question-container'>
                {question.question}
            </div>
            <CommentSection id={id}/>
            {question.user_id === 1 && (
                <button >Add Comment</button>
            )}
        </div>
    )
}

export default QuestionPage;
