import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        getCategories();
    }, [])

    useEffect(() => {
        let queries = {}
        if(category1 > 0){
            queries['category1'] = category1;
        }
        if(difficulty > 0){
            queries['difficulty'] = difficulty;
        }
        if(questions.length === 0){
            dispatch(getQuestionsFromQueries(queries, 30))
        }
    }, [questions, dispatch, category1, difficulty])

    console.log(questions[0]);
    return (
        <>
            <div className='splash-page'>
                <h1> Welcome to the Trivia Dungeon!!!</h1>
                <h2>Play some random questions:</h2>
                <TriviaRender question={questions[0]} next={true}/>
                <div className='config-section'>
                    <label htmlFor='category-select'>Category</label>
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
                </div>

            </div>
        </>
    )
}

export default SplashPage;
