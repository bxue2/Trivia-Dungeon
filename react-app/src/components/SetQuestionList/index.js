import React, {useState, useCallback} from 'react'

import ListComponent from '../ListComponent';

const SetQuestionList = ({set}) => {
    const [questions, setQuestions] = useState([])
    const [loaded, setLoaded] = useState(false)

    const getQuestions = useCallback(async (queryStr, queryType) => {
        const response = await fetch(`/api/${queryType}/search?${queryStr ? `query=${queryStr}` : ''}${(values.category1 && (values.category1 != 0)) ? '&category1=' + values.category1 : ''}`)
        const searchData = await response.json()
        // if(data.errors){
        // } else{
        if(queryType === 'questions'){
            setQuestions(searchData.questions);
        } else{
            console.log(searchData)
            setSets(searchData.sets);
        }
        setLoaded(true);

        // }
    }, [setQuestions, query])

    return (
        <ListComponent title='Search Results'>
            {questions && sets.map((set, idx) => {
                return (
                    <SetListRow set={set} key={idx}/>
                )})
            }
            {(questions.length === 0 && sets.length === 0 && loaded) &&
            <div className='no-results-screen'>
                No results found.
            </div>}
        </ListComponent>
    )
}

export default SetQuestionList;
