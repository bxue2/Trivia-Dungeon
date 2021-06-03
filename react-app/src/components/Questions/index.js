import React from 'react'
import QuestionList from './QuestionList'
import AddQuestion from './AddQuestion'

import './Questions.css'

const Questions = () => {
    return (
        <div className='questions-container'>
            <QuestionList />
            <AddQuestion />
        </div>
    )
}

export default Questions;
