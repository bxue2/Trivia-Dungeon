import React from 'react'
import {useHistory} from 'react-router-dom';

const SetListRow = ({set, getSets, setEditSet}) => {
    const history = useHistory();

    const deleteSet = async () => {
        await fetch(`/api/sets/${set.id}`, {
            method: 'DELETE'
        })
        // const deleted = await response.json();
        getSets();
    }

    const openEditForm = () => {
        setEditSet(set);
    }

    const viewSet = () => {
        history.push(`/sets/${set.id}`);
    }

    return (
        <div className='set-list-row'>
            <p className='set-display'>Set: {set.name}</p>
            <div className='set-row_button-container'>
                <button className='view-button' onClick={viewSet}>View</button>
                <button className='edit-button' onClick={openEditForm}>Edit</button>
                <button className='delete-button' onClick={deleteSet} >Delete</button>
            </div>
        </div>
    )
}
export default SetListRow;
