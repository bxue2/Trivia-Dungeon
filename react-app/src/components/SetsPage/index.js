import React, { useEffect, useState, useCallback } from 'react';
import {useParams, useHistory } from 'react-router-dom';

import TriviaRender from '../TriviaRender';

const SetsPage = () => {
    const {id} = useParams();
    const history = useHistory();

    const [set, setSet] = useState({})

    const getSets = useCallback(async () => {
        const response = await fetch(`/api/sets/${id}`);
        const setInfo = await response.json();
        if(setInfo.errors){
            history.push('/');
        }
        else{
            setSet(setInfo);
        }
    }, [id, history]);

    useEffect(() => {
        getSets();
    }, [getSets])

    return (
    <div className='sets-page'>
        {set.name}
        Sets Page
    </div>)
}

export default SetsPage;
