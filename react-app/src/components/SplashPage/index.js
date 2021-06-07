import React, { useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TriviaRender from '../TriviaRender';

import {getQuestionsFromQueries} from '../../store/questions'

import './SplashPage.css'

const SplashPage = () => {
    const questions = useSelector(state => state.questions.questions)
    const dispatch = useDispatch();
    const [category1, setCategory1] = useState(0)
    const [difficulty, setDifficulty] = useState(0);
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const response = await fetch('/api/categories/');
        const categoryList = await response.json();
        setCategories(categoryList.categories);
    }

    const getNewQuestions = () => {
        let queries = {}
        if(category1 > 0){
            queries['category1'] = category1;
        }
        if(difficulty > 0){
            queries['difficulty'] = difficulty;
        }
        dispatch(getQuestionsFromQueries(queries, 30))
    }

    //Or else useEffect warns about dependency that causes infinite loop
    let getNewQRef = useRef(getNewQuestions);

    useEffect(() => {
        getCategories();
    }, [])

    useEffect(() => {
        if(questions.length === 0){
            getNewQRef.current();
        }
    }, [questions])

    useEffect(() => {
        getNewQRef.current()
    }, [dispatch, category1, difficulty])

    console.log(questions[0]);
    return (
        <>
            <div className='splash-page'>
                <h1> Welcome to the Trivia Dungeon!!!</h1>
                <h2>Play some random questions:</h2>
                <TriviaRender question={questions[0]} next={true}/>
                <div className='config-section'>
                    <label htmlFor='category-select'>Category: </label>
                    <select className='select-category-1'
                        value={category1}
                        onChange={(e) => setCategory1(parseInt(e.target.value))}
                        name='category-select'>
                        <option value={0}>All</option>
                        {
                            categories.map((category) => {
                                return (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                )
                            })
                        }
                    </select>
                    <label htmlFor='difficulty-select'>Difficulty</label>
                    <select className='select-difficulty'
                        value={difficulty}
                        onChange={(e) => setDifficulty(parseInt(e.target.value))}
                        name='difficulty-select'>
                        <option value={0}>All</option>
                        <option value={1}>Easy</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Hard</option>
                    </select>
                </div>

            </div>
        </>
    )
}

export default SplashPage;
