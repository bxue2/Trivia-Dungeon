import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TriviaRender from '../TriviaRender';

import {getQuestionsFromQueries} from '../../store/questions'

import './RandomTrivia.css'

const SplashPage = () => {
    const questions = useSelector(state => state.questions.questions)
    const dispatch = useDispatch();
    const [category1, setCategory1] = useState(0);
    const [difficulty, setDifficulty] = useState(0);
    const [categories, setCategories] = useState([])
    const [optionChange, setOptionChange] = useState(false);
    const [loaded, setLoaded] = useState(false)

    const getCategories = async () => {
        const response = await fetch('/api/categories/');
        const categoryList = await response.json();
        setCategories(categoryList.categories);
    }

    useEffect(() => {
        getCategories();
    }, [])

    useEffect(() => {
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

        if(questions.length === 0 && !optionChange){
            getNewQuestions()
        }
        else if(optionChange){
            getNewQuestions()
            setOptionChange(false);
        }
    }, [questions, optionChange, difficulty, category1, dispatch])

    useEffect(() => {
        if(questions.length !== 0){
            setLoaded(true)
        }
    }, [questions])

    return (
        <>
            <div className='splash-page'>
                <h1> Welcome to the Trivia Dungeon!!!</h1>
                <h2>Play some random questions:</h2>
                 <TriviaRender loaded={loaded} question={questions[0]} next={true}/>
                <div className='config-section'>
                    <div>
                        <label htmlFor='category-select'>Category: </label>
                        <select className='select-category-1'
                            value={category1}
                            onChange={(e) => {
                                setCategory1(parseInt(e.target.value))
                                setOptionChange(true)
                            }}
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
                    </div>
                    <div>
                        <label htmlFor='difficulty-select'>Difficulty: </label>
                        <select className='select-difficulty'
                            value={difficulty}
                            onChange={(e) => {
                                setDifficulty(parseInt(e.target.value))
                                setOptionChange(true)
                            }}
                            name='difficulty-select'>
                            <option value={0}>All</option>
                            <option value={1}>Easy</option>
                            <option value={2}>Medium</option>
                            <option value={3}>Hard</option>
                        </select>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SplashPage;
