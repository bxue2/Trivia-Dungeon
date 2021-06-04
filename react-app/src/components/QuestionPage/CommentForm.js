import React, {useState} from 'react'

const CommentForm = ({question_id}) => {
    const [comment, setComment] = useState()
    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'comment': comment,
                'rating': 5,
                'question_id': question_id
            })
        });

    }

    return (
        <form onSubmit={submitComment}>
            <div className='comment-form-field_row'>
                <label htmlFor='comment'>Comment</label>
                <textarea name='comment' value={comment} onChange={(e) => setComment(e.target.value)}/>
            </div>
            <button className='submit-comment-button'>Submit</button>
        </form>
     )
}

export default CommentForm;
