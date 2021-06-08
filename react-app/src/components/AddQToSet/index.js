import React, {useState} from 'react'
import ListComponent from '../ListComponent'
import AddToSetRow from './AddToSetRow';

const AddToSet = ({qid}) => {
    const user = useSelector(state => state.session.user);
    const [sets, setSets] = useState([])

    const getSets = useCallback(async () => {
        const response = await fetch(`/api/sets/user/${user.id}`)
        const data = await response.json()
            setSets(data.sets);
    }, [user.id])

    useEffect(() => {
        getSets();
    }, [getSets])

    return (
        <ListComponent >
            {sets && sets.map((set, idx) => {
                return <AddToSetRow set={set} qid={qid} key={idx}/>
            })}
        </ListComponent>
    )
}

export default AddToSet;
