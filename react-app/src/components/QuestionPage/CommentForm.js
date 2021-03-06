import React, {useEffect, useState} from 'react'
import Rating from '@material-ui/lab/Rating';

const CommentForm = ({editComment, questionId, setShowForm, getComments}) => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(editComment){
            setComment(editComment.comment);
            setRating(editComment.rating);
        }
    }, [editComment])

    const checkErrors = () => {
        let newErrors = [];
        if(rating === 0){
            newErrors.push('Select a rating.')
        }
        if(comment.length === 0){
            newErrors.push('Add a comment.')
        }

        setErrors(newErrors);
        return newErrors;
    }

    const submitComment = async (e) => {
        e.preventDefault();
        let newErrors = checkErrors();
        let fetchMethod = 'POST';
        let putId = '';
        if(editComment){
            fetchMethod = 'PUT';
            putId = editComment.id;
        }
        if(newErrors.length === 0){
            const response = await fetch(`/api/comments/${putId}`, {
                'method': fetchMethod,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'comment': comment,
                    'rating': rating,
                    'question_id': questionId
                })
            });
            const data = await response.json();
            if(data.errors){
                setErrors(data.errors);
            }
            else{
                setShowForm(false);
                getComments()
            }

        }
    }

    return (
        <form className='comment-form' onSubmit={(e) => submitComment(e)}>
            <div>
                {errors.map((error) => (
                <div>{error}</div>
                ))}
            </div>
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
