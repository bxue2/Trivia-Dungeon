import React from 'react'
import Rating from '@material-ui/lab/Rating';

const CommentDiv = ({comment}) => {
    return (
        <div className='comment-div'>
            <Rating
                name="rating-buttons"
                value={comment.rating}
                readOnly
            />
            <div>
                {comment.comment}
            </div>

        </div>
    )
}

export default CommentDiv;
