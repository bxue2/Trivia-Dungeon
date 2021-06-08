import React, { useEffect, useState } from 'react'
import ListComponent from '../ListComponent';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

const SearchResults = (props) => {
    const [queryStr, setQueryStr] = useState();
    const query = useLocation()

    useEffect(() => {
        const values = queryString.parse(query.search)
        if(values.query){
            setQueryStr(values.query);
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
