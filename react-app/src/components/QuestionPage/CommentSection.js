import React, {useEffect, useState, useCallback} from 'react'
import {useSelector} from 'react-redux';

import CommentDiv from './CommentDiv';
import CommentForm from './CommentForm'

import { Modal } from '../../context/Modal';

const CommentSection = ({question}) => {
    const user = useSelector(state => state.session.user)
    const [comments, setComments] = useState([])
    const [showForm, setShowForm] = useState(false);
    const [showAdd, setShowAdd] = useState(question.userId !== user.id);

    const getComments = useCallback(async () => {
        const response = await fetch(`/api/comments/${question.id}`)
        const data = await response.json();
        setComments(data.qcomments);
    }, [question.id])

    useEffect(() => {
        if(question.id){
            getComments();
        }
    }, [question, getComments])

    return (
        <>
            <h1>Comments</h1>
            <div className='comment-list-container'>
                {comments.map((comment, idx) => {
                    return (
                        <CommentDiv key={idx} comment={comment} setShowAdd={setShowAdd}/>
                    )
                })}
            </div>
            {showAdd && (
                <button className='add-comment-button' onClick={() => setShowForm(true)}>Add Comment</button>
            )}
            {showForm && (
                <Modal onClose={() => setShowForm(false)}>
                    <CommentForm questionId={question.id} setShowForm={setShowForm}/>
                </Modal>
            )}
        </>
    )
}

export default CommentSection;
