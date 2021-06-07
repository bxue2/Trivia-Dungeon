import React, {useEffect, useState} from 'react';

const AddSet = ({setShowForm, editSet, setEditSet, getSets}) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const clearFields = () => {
        setName("");
        setEditSet("");
        setShowForm(false);
        setEditSet(null);
    }

    const checkErrors = () => {
        let newErrors = [];
        if(name.length === 0){
            newErrors.push('Name field is required.')
        }
        setErrors(newErrors);
        return newErrors;
    }

    //Prefill if editing
    useEffect(() => {
        if(editSet){
            setName(editSet.name);
        }
    }, [editSet])

    const createSet = async (e) => {
        e.preventDefault();
        let newErrors = checkErrors();
        let fetchMethod = 'POST';
        let putId = '';
        if(editSet){
            fetchMethod = 'PUT';
            putId = editSet.id;
        }
        if(newErrors.length === 0){
            await fetch(`/api/sets/${putId}`, {
                method: fetchMethod,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name': name
                })
            })
            // const res_question = await response.json();
            getSets();
            clearFields();
        }
    }

    return (
        <div className='add-set-container'>
            <h1>{editSet ? 'Edit Set' : 'Create a Set'}</h1>
            <form className='add-set-form' onSubmit={(e) => createSet(e)}>
                <div className='error-list'>
                    {errors.map((error, idx) => (
                    <div className="error-div" key={idx}>
                        {error}
                    </div>
                    ))}
                </div>
                <div className='add_set_field-row'>
                    <label htmlFor='setName'>Set Name:</label>
                    <input
                        type='text'
                        name='setName'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' className='add-set-submit'>
                        {editSet ? 'Edit' : 'Create'}
                    </button>
                    <button className='add-set-cancel' onClick={() => clearFields()}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddSet;
