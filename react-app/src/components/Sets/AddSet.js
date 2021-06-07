import React, {useState} from 'react';

const AddSet = ({setShowForm, editSet, setEditSet, getSets}) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const checkErrors = () => {
        let newErrors = [];
        if(name.length === 0){
            newErrors.push('Name field is required.')
        }
        setErrors(newErrors);
        return newErrors;
    }

    const createSet = (e) => {
        e.preventDefault();
        let newErrors = checkErrors();
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
                <label htmlFor='setName'>Set Name:</label>
                <input
                    type='text'
                    name='setName'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>
                    <button type='submit' className='add-set-submit'>
                        {editSet ? 'Edit' : 'Create'}
                    </button>
                    <button className='add-set-cancel' onClick={() => {
                        setName("")
                        setShowForm(false)}}>
                        Cancel
                    </button>
                </div>
            </form>

        </div>

    )
}

export default AddSet;
