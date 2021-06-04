import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';

import CommentDiv from './CommentDiv';
import CommentForm from './CommentForm'

import { Modal } from '../../context/Modal';

const CommentSection = ({question}) => {
    const [comments, setComments] = useState([])
    const [showForm, setShowForm] = useState(false);
    const user = useSelector(state => state.session.user)

    const getComments = async () => {
        const response = await fetch(`/api/comments/${question.id}`)
        const data = await response.json();
        console.log(data)
        setComments(data.qcomments);
    }

    useEffect(() => {
        if(question.id){
            getComments();
        }
    }, [question])

    return (
        <>
            <div className='comment-list-container'>
                {comments.map((comment, idx) => {
                    return (
                        <CommentDiv key={idx} comment={comment}/>
                    )
                })}
            </div>
            {question.userId !== user.id && (
                <button className='add-comment-button' onClick={() => setShowForm(true)}>Add Comment</button>
            )}
            {showForm && (
                <Modal onClose={() => setShowForm(false)}>
                    <CommentForm questionId={question.id}/>
                </Modal>
            )}
        </>
    )
}

export default CommentSection;
