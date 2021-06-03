import React, {useEffect, useState} from 'react';

const AddQuestion = ({editQuestion, setEditQuestion, getQuestions}) => {
    const [showForm, setShowForm] = useState(false);

    const [errors, setErrors] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [incorrect1, setIncorrect1] = useState("");
    const [incorrect2, setIncorrect2] = useState("");
    const [incorrect3, setIncorrect3] = useState("");
    const [difficulty, setDifficulty] = useState(1);
    const [categoryId, setCategoryId] = useState(1);
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const response = await fetch('/api/categories');
        const categoryList = await response.json();
        setCategories(categoryList.categories);
    }

    const clearFields = () => {
        setQuestion("");
        setAnswer("");
        setIncorrect1("");
        setIncorrect2("");
        setIncorrect3("");
        setDifficulty(1);
        setCategoryId(1);
    }

    useEffect(() => {
        getCategories();
        if(editQuestion){
            setQuestion = editQuestion.question;
            setAnswer = editQuestion.answer;
            setIncorrect1 = editQuestion.incorrect_answer_1;
            setIncorrect2 = editQuestion.incorrect_answer_2;
            setIncorrect3 = editQuestion.incorrect_answer_3;
            setDifficulty = editQuestion.difficulty;
            setCategoryId = editQuestion.categoryId;
        }
    }, [])

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
        if(difficulty === 0){
            newErrors.push('Difficulty must be selected.')
        }
        setErrors(newErrors);
    }

    const submitQuestion = async (e) => {
        e.preventDefault()
        checkErrors();
        console.log(categoryId)
        if(errors.length === 0){
            const response = await fetch('/api/questions/', {
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
                    'difficulty': difficulty,
                    'category_id': categoryId
                })
            })
            // const res_question = await response.json();
            getQuestions();
            clearFields();
            setShowForm(false);
            setEditQuestion(null);
            // console.log(res_question)
        }
    }

    return (
        <>
            {!showForm && (
                <button onClick={() => setShowForm(true)}>Add Question</button>
            )}
            {showForm && <div className='add-question-container'>
                <h1>{editQuestion ? 'Edit Question' : 'Submit a Question'}</h1>
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
                    <div className='add_question_field-row'>
                        <label htmlFor='difficulty'>Difficulty</label>
                        <div>
                            <input
                                type='radio'
                                id='easy'
                                name='difficulty'
                                defaultChecked={difficulty === 1}
                                onClick={() => setDifficulty(1)}
                            />
                            <label htmlFor='easy'>Easy</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='medium'
                                name='difficulty'
                                defaultChecked={difficulty === 2}
                                onClick={() => setDifficulty(2)}
                            />
                            <label htmlFor='medium'>Medium</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='hard'
                                name='difficulty'
                                defaultChecked={difficulty === 3}
                                onClick={() => setDifficulty(3)}
                            />
                            <label htmlFor='hard'>Hard</label>
                        </div>
                    </div>
                    <div className='add_question_field-row'>
                    <label htmlFor='category-select'>Category</label>
                        <select className='add-question_category-select' value={categoryId} onChange={(e) => setCategoryId(parseInt(e.target.value))} name='category-select'>
                            {
                                categories.map((category) => {
                                    return (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <button type='submit' className='add-question-submit'>
                            {editQuestion ? 'Edit' : 'Submit'}
                        </button>
                        <button className='add-question-cancel' onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                    </div>

                </form>
            </div>}
        </>
    )
}

export default AddQuestion;
