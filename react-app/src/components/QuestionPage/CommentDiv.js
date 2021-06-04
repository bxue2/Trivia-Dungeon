import React from 'react'
import {useSelector} from 'react-redux';
import Rating from '@material-ui/lab/Rating';

const CommentDiv = ({comment}) => {
    const user = useSelector(state => state.session.user)

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
                    <button>Test</button>
                </div>
            )}
        </div>
    )
}

export default CommentDiv;
