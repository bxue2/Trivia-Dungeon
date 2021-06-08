import React from 'react'

const AddToSetRow = ({set}) => {
    return (
        <div className='add-to-set-row'>
            {set && set.name}
        </div>
    )
}

export default AddToSetRow;
