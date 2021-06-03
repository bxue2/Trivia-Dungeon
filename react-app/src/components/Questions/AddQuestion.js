import React, {useState} from 'react';

const AddQuestion = ({origQuestion}) => {
    const [errors, setErrors] = useState([]);
    const [question, setQuestion] = useState("");

    const checkErrors = () => {
        let newErrors = [];
        if(question.length == 0){
            newErrors.push('Question field is required.')
        }
        setErrors(newErrors);
    }

    const submitQuestion = (e) => {
        e.preventDefault()
        checkErrors();
        if(errors.length === 0){
            const response = await fetch('/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'question': question
                })
            })
            const res_question = await response.json();
        }
    }
    return (
        <div className='add-question-form'>
            <form onSubmit={(e) => submitQuestion(e)}>
            <div>
                {errors.map((error, idx) => (
                <div className="error-div" key={idx}>
                    {error}
                </div>
                ))}
            </div>
            <div className='add_question_field-row'>
                <input
                    type='text'
                    name='question'
                    placeholder='Question'
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </div>
            <button type='submit' className='add-question-submit'>
                {origQuestion ? 'Edit' : 'Submit'}
            </button>
            </form>
        </div>
    )
}

export default AddQuestion;
