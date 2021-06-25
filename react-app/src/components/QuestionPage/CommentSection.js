import React, {useEffect, useState, useCallback} from 'react'
import {useSelector} from 'react-redux';

import CommentDiv from './CommentDiv';
import CommentForm from './CommentForm'

import { Modal } from '../../context/Modal';

const CommentSection = ({question}) => {
    const user = useSelector(state => state.session.user)
    const [comments, setComments] = useState([])
    const [showForm, setShowForm] = useState(false);
    const [editComment, setEditComment] = useState(null)
    const [showAdd, setShowAdd] = useState(true);

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

    useEffect(() => {
        if(user){
            let foundMatch = false;
            comments.forEach((comment) => {
                if(user.id === comment.userId){
                    foundMatch = true;
                }
            })
            setShowAdd(!foundMatch);

            if(question.userId === user.id){
                setShowAdd(false)
            }
        }
        else{
            setShowAdd(false);
        }

    }, [comments, user, question.userId])

    return (
        <div className='comment-section'>
            <h1>Comments</h1>
            <div className='comment-list-container'>
                {comments.map((comment, idx) => {
                    // console.log(comment);
                    return (
                        <CommentDiv setShowForm={setShowForm} setEditComment={setEditComment} key={idx} comment={comment} getComments={getComments}/>
                    )
                })}
            </div>
            {showAdd && (
                <button className='add-comment-button' onClick={() => setShowForm(true)}>Add Comment</button>
            )}
            {showForm && (
                <Modal onClose={() => setShowForm(false)}>
                    <CommentForm editComment={editComment} questionId={question.id} getComments={getComments} setShowForm={setShowForm}/>
                </Modal>
            )}
        </div>
    )
}

export default CommentSection;
