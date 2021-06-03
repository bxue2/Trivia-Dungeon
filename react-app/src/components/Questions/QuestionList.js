import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

const QuestionList = () => {
    const user = useSelector(state => state.session.user);
    const getQuestions = async () => {
        const response = await fetch(`/api/questions/user/${user.id}`)
    }

    let questions = (
        <div className='loading-questions'>
            Loading...
        </div>
    )
    useEffect(() => {
        getQuestions();
    }, [])

    return (
        <div className='question-list-container'>
            <h1>Submitted Questions</h1>
            {questions}
        </div>
    )
}

export default QuestionList;
