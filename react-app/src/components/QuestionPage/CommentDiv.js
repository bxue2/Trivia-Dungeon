import React from 'react'
import {useSelector} from 'react-redux';
import Rating from '@material-ui/lab/Rating';

const CommentDiv = ({comment, getComments}) => {
    const user = useSelector(state => state.session.user)

    const openEditForm = async () => {
        //fill out
    }

    const deleteComment = async () => {
        await fetch(`/api/comments/${comment.id}`, {
            method: 'DELETE'
        })
        getComments();
    }
    return (
        <div className='comment-div'>
            <div className='comment-username'>
                {comment.user.username}
            </div>
            <Rating
                name="rating-buttons"
                value={comment.rating}
                readOnly
            />
            <div className='comment-comment'>
                {comment.comment}
            </div>
            {user.id === comment.userId && (
                <div className='comment-action-group'>
                    <button onClick={openEditForm}>Edit</button>
                    <button onClick={deleteComment}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default CommentDiv;
