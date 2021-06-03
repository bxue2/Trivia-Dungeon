import React, {useState} from 'react';

const AddQuestion = ({origQuestion}) => {
    const [errors, setErrors] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [incorrect1, setIncorrect1] = useState("");
    const [incorrect2, setIncorrect2] = useState("");
    const [incorrect3, setIncorrect3] = useState("");
    const [difficulty, setDifficulty] = useState(1);
    const [category, setCategory] = useState(1);

    const checkErrors = () => {
        let newErrors = [];
        if(question.length === 0){
            newErrors.push('Question field is required.')
        }
        if(answer.length === 0){
            newErrors.push('Answer field is required.')
        }
        if(incorrect1.length === 0){
            newErrors.push('Incorrect Answer 1 is required.')
        }
        setErrors(newErrors);
    }

    const submitQuestion = async (e) => {
        e.preventDefault()
        checkErrors();
        if(errors.length === 0){
            const response = await fetch('/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'question': question,
                    'answer': answer,
                    'incorrect_answer_1': incorrect1,
                    'incorrect_answer_2': incorrect2,
                    'incorrect_answer_3': incorrect3,
                })
            })
            const res_question = await response.json();
        }
    }
    return (
        <div className='add-question-container'>
            <h1>Submit a Question</h1>
            <form className='add-question-form' onSubmit={(e) => submitQuestion(e)}>
                <div className='error-list'>
                    {errors.map((error, idx) => (
                    <div className="error-div" key={idx}>
                        {error}
                    </div>
                    ))}
                </div>
                <div className='add_question_field-row'>
                    <label htmlFor='question'>Question</label>
                    <input
                        type='text'
                        name='question'
                        placeholder='Question'
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>
                <div className='add_question_field-row'>
                    <label htmlFor='answer'>Answer</label>
                    <input
                        type='text'
                        name='answer'
                        placeholder='Correct Answer'
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </div>
                <div className='add_question_field-row'>
                    <label htmlFor='incorrect1'>Incorrect Answer 1</label>
                    <input
                        type='text'
                        name='incorrect1'
                        placeholder='Incorrect Answer 1'
                        value={incorrect1}
                        onChange={(e) => setIncorrect1(e.target.value)}
                    />
                </div>
                <div className='add_question_field-row'>
                    <label htmlFor='incorrect2'>Incorrect Answer 2</label>
                    <input
                        type='text'
                        name='incorrect2'
                        placeholder='Incorrect Answer 2 (optional)'
                        value={incorrect2}
                        onChange={(e) => setIncorrect2(e.target.value)}
                    />
                </div>
                <div className='add_question_field-row'>
                    <label htmlFor='incorrect3'>Incorrect Answer 3</label>
                    <input
                        type='text'
                        name='incorrect3'
                        placeholder='Incorrect Answer 3 (optional)'
                        value={incorrect3}
                        onChange={(e) => setIncorrect3(e.target.value)}
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
