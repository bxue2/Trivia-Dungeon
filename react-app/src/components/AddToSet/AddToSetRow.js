import React, {useEffect, useState} from 'react'

const AddToSetRow = ({qid, setContain}) => {
    const [addToggle, setAddToggle] = useState(true)

    useEffect(() => {
        console.log("Contains", setContain)
        setAddToggle(!setContain.contain)
    }, [setContain, qid])

    const addToSet = async () => {
        const response = await fetch(`/api/sets/${setContain.id}/question/${qid}`, {
            method: 'POST'
        })
        const data = await response.json();
        if(!data.errors){
            setAddToggle(false)
        }
        else{
            console.log(data.errors)
        }
    }
    const removeFromSet = async () => {
        const response = await fetch(`/api/sets/${setContain.id}/question/${qid}`, {
            method: 'DELETE'
        })
        const data = await response.json();
        if(!data.errors){
            setAddToggle(true)
        }
        else{
            console.log(data.errors)
        }
    }
    return (
        <div className='add-to-set-row'>
            <div className='set-name-label'>
                {setContain.name}
            </div>
            {addToggle && <button className='add-to-set-button' onClick={addToSet}>Add</button>}
            {!addToggle && <button className='remove-from-set-button' onClick={removeFromSet}>Remove</button>}
        </div>
    )
}

export default AddToSetRow;
