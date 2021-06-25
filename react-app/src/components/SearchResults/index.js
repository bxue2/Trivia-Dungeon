import React, { useEffect, useState, useCallback } from 'react'
import ListComponent from '../ListComponent';
import { useLocation } from "react-router-dom";
import QuestionListRow from '../Questions/QuestionListRow'
import SetListRow from '../Sets/SetListRow'
import queryString from 'query-string';

import './SearchResults.css'

const SearchResults = (props) => {
    const [questions, setQuestions] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [sets, setSets] = useState([])
    const query = useLocation()
    const values = queryString.parse(query.search)

    const getSearch = useCallback(async (queryStr, queryType) => {
        const response = await fetch(`/api/${queryType}/search?${queryStr ? `query=${queryStr}` : ''}${(values.category1 && (values.category1 !== 0)) ? '&category1=' + values.category1 : ''}`)
        const searchData = await response.json()
        // if(data.errors){
        // } else{
        if(queryType === 'questions'){
            setQuestions(searchData.questions);
        } else{
            // console.log(searchData)
            setSets(searchData.sets);
        }
        setLoaded(true);

        // }
    }, [setQuestions, values.category1])

    useEffect(() => {
        getSearch(values.query, values.type);
    }, [query, getSearch, values.query, values.type])
    return (
        <div className='search-results-container'>
            <ListComponent title='Search Results'>
            {values.type === 'questions' && questions && questions.map((question, idx) => {
                        return (
                            <QuestionListRow question={question} key={idx}/>
                        )})
            }
            {values.type === 'sets' && sets && sets.map((set, idx) => {
                        return (
                            <SetListRow set={set} key={idx}/>
                        )})
            }
            {(questions.length === 0 && sets.length === 0 && loaded) &&
            <div className='no-results-screen'>
                No results found.
            </div>}
            </ListComponent>
        </div>
    )
}

export default SearchResults;
