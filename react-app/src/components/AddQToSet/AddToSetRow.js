import React from 'react'

const AddToSetRow = ({qid, setContain}) => {
    const addToSet = () => {
        const response = await fetch(`/api/sets/${setContain.id}/question/${qid}`, {
            method: 'POST'
        })
    }
    const removeFromSet = () => {
        const response = await fetch(`/api/sets/${setContain.id}/question/${qid}`, {
            method: 'DELETE'
        })
    }
    return (
        <div className='add-to-set-row'>
            <div className='set-name-label'>
                {setContain.name}
            </div>
            <button className='add-to-set-button' onClick={addToSet}>+</button>
            <button className='remove-from-set-button' onClick={removeFromSet}>-</button>
        </div>
    )
}

export default AddToSetRow;
