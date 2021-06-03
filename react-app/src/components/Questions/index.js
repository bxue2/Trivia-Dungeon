import React, {useState, useEffect} from 'react'
import QuestionList from './QuestionList'
import AddQuestion from './AddQuestion'
import { useSelector } from 'react-redux';

import './Questions.css'

const Questions = () => {
    const user = useSelector(state => state.session.user);
    const [questions, setQuestions] = useState([])

    const getQuestions = async () => {
        const response = await fetch(`/api/questions/user/${user.id}`)
        const data = await response.json()
        // if(data.errors){
        // } else{
        setQuestions(data.questions);
        // }
    }

    useEffect(() => {
        getQuestions();
    }, [])

    return (
        <div className='questions-container'>
            <QuestionList questions={questions} getQuestions={getQuestions}/>
            <AddQuestion getQuestions={getQuestions}/>
        </div>
    )
}

export default Questions;
