import React, { useEffect, useState, useCallback } from 'react'
import ListComponent from '../ListComponent';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

const SearchResults = (props) => {
    const [questions, setQuestions] = useState();
    const query = useLocation()

    const getSearch = useCallback(async (queryStr) => {
        const response = await fetch(`/api/questions/search?query=${queryStr}`)
        const data = await response.json()
        // if(data.errors){
        // } else{
            console.log(data.questions)
            setQuestions(data.questions);
        // }
    }, [setQuestions])

    useEffect(() => {
        const values = queryString.parse(query.search)
        if(values.query){
            getSearch(values.query);
        }

    }, [query, getSearch])
    return (
        <div>
            <ListComponent>

            </ListComponent>
        </div>
    )
}

export default SearchResults;
