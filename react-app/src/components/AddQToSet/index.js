import React, {useState} from 'react'
import ListComponent from '../ListComponent'
import AddToSetRow from './AddToSetRow';

const AddToSet = ({qid}) => {
    const user = useSelector(state => state.session.user);
    const [setsContain, setSetsContain] = useState([])

    const getSets = useCallback(async () => {
        const response = await fetch(`/api/sets/user/${user.id}?qid=${qid}`)
        const data = await response.json()
        setSetsContain(data.sets);
    }, [user.id])

    useEffect(() => {
        getSets();
    }, [getSets])

    return (
        <ListComponent >
            {setsContain && setsContain.map((setContain, idx) => {
                return <AddToSetRow setContain={setContain} qid={qid} key={idx}/>
            })}
        </ListComponent>
    )
}

export default AddToSet;
