import React from 'react'
import {useSelector} from 'react-redux';
import Rating from '@material-ui/lab/Rating';

const CommentDiv = ({comment, setShowAdd}) => {
    const user = useSelector(state => state.session.user)
    console.log(comment)

    if(user.id === comment.userId){
        setShowAdd(false);
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
                    <button>Test</button>
                </div>
            )}
        </div>
    )
}

export default CommentDiv;
