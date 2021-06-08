import React, { useEffect, useState, useCallback } from 'react'
import ListComponent from '../ListComponent';
import { useLocation } from "react-router-dom";
import QuestionListRow from '../Questions/QuestionListRow'
import queryString from 'query-string';

import './SearchResults.css'

const SearchResults = (props) => {
    const [questions, setQuestions] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const query = useLocation()

    const getSearch = useCallback(async (queryStr) => {
        const response = await fetch(`/api/questions/search?query=${queryStr}`)
        const data = await response.json()
        // if(data.errors){
        // } else{
            console.log(data.questions)
            setQuestions(data.questions);
            setLoaded(true);
        // }
    }, [setQuestions])

    useEffect(() => {
        const values = queryString.parse(query.search)
        if(values.query){
            getSearch(values.query);
        }

    }, [query, getSearch])
    return (
        <div className='search-results-container'>
            <ListComponent title='Search Results'>
            {questions && questions.map((question, idx) => {
                        return (
                            <QuestionListRow question={question} key={idx}/>
                        )})
            }
            {(questions.length === 0 && loaded) &&
            <div className='no-results-screen'>
                No results found.
            </div>}
            </ListComponent>
        </div>
    )
}

export default SearchResults;
