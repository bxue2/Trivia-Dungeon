import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import AnswerButton from './AnswerButton';
import CorrectOverlay from './CorrectOverlay';
import IncorrectOverlay from './IncorrectOverlay';
import QuestionInfo from './QuestionInfo';
import AddToSet from '../AddToSet';
import { Modal } from '../../context/Modal';
import EndScreen from './EndScreen';
import './TriviaRender.css'

//next controls if there's a next button or not (disabled if on the question page)
const TriviaRender = ({setReplay=null, loaded=true, question, next}) => {
    const user = useSelector(state => state.session.user);
    const questions = useSelector(state => state.questions.questions)
    //0=not answered, 1=correct, 2=wrong
    const [answered, setAnswered] = useState(0);
    const [answerList, setAnswerList] = useState([]);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(question){
            const randomizeAnswers = () => {
                // if(answered === 0){
                    let answers = [];
                    if(question.incorrectAnswers){
                        //Setup answers array
                        answers.push(question.answer);
                        question.incorrectAnswers.forEach((incorrect) => {
                            if(incorrect.length > 0){
                                answers.push(incorrect);
                            }
                        })

                        //Shuffle answers array
                        for(let i = answers.length - 1; i > 0; i--){
                            let randomIndex = Math.floor(Math.random() * (i + 1));
                            [answers[i], answers[randomIndex]] = [answers[randomIndex], answers[i]];
                        }
                    }
                    setAnswerList(answers);
                // }
            }
            randomizeAnswers();
        }
    }, [question])  //Add answered back in to randomize on incorrect

    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddToSet qid={question.id}/>
                </Modal>
            )}
            <div className='trivia-render-container'>
                {user && <button className='open-add-set' onClick={() => setShowModal(true)}>Add to/Remove from Sets</button>}
                {answered === 1 && (
                    <CorrectOverlay setAnswered={setAnswered} next={next}/>
                )}
                {answered === 2 && (
                    <IncorrectOverlay setAnswered={setAnswered} next={next}/>
                )}
                <div className='question-section'>
                    {question && question.question}
                </div>
                <div className='answer-section'>
                    {question && answerList.map((answer, idx) => {
                        let correct = (answer === question.answer);
                        return <AnswerButton correct={correct} setAnswered={setAnswered} answer={answer} key={idx}/>
                    })}
                </div>
                {questions.length === 0 && loaded && (<EndScreen setReplay={setReplay}/>)}
                <QuestionInfo question={question}/>
            </div>
        </>
    )
}

export default TriviaRender;
