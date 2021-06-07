import React, {useState, useEffect, useCallback} from 'react'
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import ListComponent from '../ListComponent';
import SetListRow from './SetListRow'
import AddSet from './AddSet'
import './Sets.css'

const Sets = () => {
    const user = useSelector(state => state.session.user);
    const [sets, setSets] = useState([])
    const [editSet, setEditSet] = useState(null)

    const [showForm, setShowForm] = useState(false);

    const getSets = useCallback(async () => {
        const response = await fetch(`/api/sets/user/${user.id}`)
        const data = await response.json()
        // if(data.errors){
        // } else{
            setSets(data.sets);
        // }
    }, [user.id])

    useEffect(() => {
        getSets();
    }, [getSets])

    return (
        <div className="sets-container">
            <h1>Sets page</h1>
            <ListComponent title={"Created Sets"}>
                {sets.map((set, idx) => {
                        return (
                            <SetListRow set={set} getSets={getSets} setEditSet={setEditSet} key={idx}/>
                        )})
                }
            </ListComponent>
            <div>
                <button className='add-set-button' onClick={() => setShowForm(true)}>Add Set</button>
                {showForm && (
                    <Modal onClose={() => setShowForm(false)}>
                        <AddSet setShowForm={setShowForm} editSet={editSet} setEditSet={setEditSet} getSets={getSets}/>
                    </Modal>
                )}
            </div>
        </div>
    )
}

export default Sets;
