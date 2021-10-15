import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateComment } from "../../../../store/comments";

function DeleteCommentForm({ comment }) {
    const [commentBody, setCommentBody] = useState(comment.body);
    const dispatch = useDispatch();

    const yes = async (e) => {
        e.preventDefault();

        const payload = {
            ...comment,
            body: commentBody
        };

        dispatch(updateComment(payload));
    }
    return (
        <div className="comment-edit">
            <h2>Editing Comment:</h2>
            <form className="comment-edit-form" onSubmit={onSubmit}>
                <label htmlFor='edit-comment-body'>Edit:</label>
                <textarea id='edit-comment-body' value={commentBody} onChange={e => setCommentBody(e.target.value)} />
                <button className="submit-edit-comment" type="submit">Edit Comment</button>
            </form>
        </div>
    )
}

export default EditCommentForm;
