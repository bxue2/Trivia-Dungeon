import React from 'react'
import Rating from '@material-ui/lab/Rating';

const CommentDiv = ({comment}) => {
    console.log(comment)
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

        </div>
    )
}

export default CommentDiv;
