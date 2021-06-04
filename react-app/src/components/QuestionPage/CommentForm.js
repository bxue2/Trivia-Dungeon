import React, {useState} from 'react'
import Rating from '@material-ui/lab/Rating';

const CommentForm = ({questionId}) => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);



    const submitComment = async () => {

        await fetch('/api/comments', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'comment': comment,
                'rating': rating,
                'question_id': questionId
            })
        });

    }

    return (
        <form className='comment-form' onSubmit={submitComment}>
            <label className='rating-label' htmlFor='rating-buttons'>Rating</label>
            <Rating
                name="rating-buttons"
                value={rating}
                onChange={(e, newRating) => {
                    setRating(newRating);
                }}
            />
            <div className='comment-form-field_row'>
                <label htmlFor='comment'>Comment</label>
                <textarea name='comment' value={comment} onChange={(e) => setComment(e.target.value)}/>
            </div>
            <button className='submit-comment-button'>Submit</button>
        </form>
     )
}

export default CommentForm;
