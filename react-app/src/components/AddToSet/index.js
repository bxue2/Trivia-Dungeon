import React, {useState, useEffect, useCallback} from 'react'
import {useSelector} from 'react-redux';
import ListComponent from '../ListComponent'
import AddToSetRow from './AddToSetRow';

import './AddToSet.css'

const AddToSet = ({qid}) => {
    const user = useSelector(state => state.session.user);
    const [setsContain, setSetsContain] = useState([])
    // const [page, setPage] = useState(1);

    const getSets = useCallback(async () => {
        const response = await fetch(`/api/sets/user/${user.id}?qid=${qid}`)
        const data = await response.json()
        setSetsContain(data.sets);
    }, [user.id, qid])

    useEffect(() => {
        getSets();
    }, [getSets])

    return (
        <ListComponent title='Add Question to Set'>
            {setsContain && setsContain.map((setContain, idx) => {
                return <AddToSetRow setContain={setContain} qid={qid} key={idx}/>
            })}
        </ListComponent>
    )
}

export default AddToSet;
