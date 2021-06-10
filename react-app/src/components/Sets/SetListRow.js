import React from 'react'
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const SetListRow = ({set, getSets=null, setEditSet=null}) => {
    const user = useSelector(state => state.session.user);
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
                <button className='view-sets_button' onClick={viewSet}>View</button>
                {setEditSet && <button className='edit-sets_button' onClick={openEditForm}>Edit</button>}
                {getSets && <button className='delete-sets_button' onClick={deleteSet} >Delete</button>}
            </div>
        </div>
    )
}
export default SetListRow;
