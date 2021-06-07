import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TriviaRender from '../TriviaRender';

import {getQuestionsFromQueries} from '../../store/questions'

import './SplashPage.css'

const SplashPage = () => {
    const questions = useSelector(state => state.questions.questions)
    const dispatch = useDispatch();
    const [category1, setCategory1] = useState(0)
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
        if(questions.length === 0){
            dispatch(getQuestionsFromQueries())
        }
    }, [questions, dispatch])

    console.log(questions[0]);
    return (
        <>
            <div className='splash-page'>
                <h1> Welcome to the Trivia Dungeon!!!</h1>
                <h2>Play some random questions:</h2>
                <TriviaRender question={questions[0]} next={true}/>
                <div className='config-section'>
                    <select className='select-category-1'
                        value={category1}
                        onChange={(e) => setCategory1(parseInt(e.target.value))}
                        name='category-select'>
                        <option value={0} >All</option>
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
