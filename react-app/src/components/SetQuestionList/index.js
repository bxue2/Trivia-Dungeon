import React, {useState, useCallback} from 'react'

import ListComponent from '../ListComponent';

const SetQuestionList = ({set}) => {
    const [questions, setQuestions] = useState([])
    const [loaded, setLoaded] = useState(false)

    const getQuestions = useCallback(async () => {
        const response = await fetch(`/api/questions/sets/${set.id}`)
        const data = await response.json()
        // if(data.errors){
        // } else{
        setQuestions(data.questions);
    }, [setQuestions])

    useEffect(() => {
        getQuestions();
    }, [getQuestions])

    useEffect(() => {
        if(questions.length !== 0){
            setLoaded(true)
        }
    }, [questions, setLoaded])

    return (
        <ListComponent title='Question List'>
            {questions && questions.map((question, idx) => {
                return (
                    <SetQuestionRow set={set} question={question} getQuestions={getQuestions} key={idx}/>
                )})
            }
            {(questions.length === 0 && sets.length === 0 && loaded) &&
            <div className='no-results-screen'>
                No questions found.
            </div>}
        </ListComponent>
    )
}

export default SetQuestionList;
