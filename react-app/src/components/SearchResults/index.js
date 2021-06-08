import React, { useEffect } from 'react'
import ListComponent from '../ListComponent';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

const SearchResults = (props) => {
    const query = useLocation()

    useEffect(() => {
        const values = queryString.parse(query)
        console.log(values)
        if(values.query){
        }
    }, [query])
    return (
        <div>
            <ListComponent>

            </ListComponent>
        </div>
    )
}

export default SearchResults;
