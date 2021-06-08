import React from 'react'

const AddToSetRow = ({set}) => {
    const addToSet = () => {
        const response = await fetch('/api/sets/')
    }
    return (
        <div className='add-to-set-row'>
            <div className='set-name-label'>
                {set.name}
            </div>
            <button className='add-to-set-button' onClick={addToSet}>+</button>
        </div>
    )
}

export default AddToSetRow;
