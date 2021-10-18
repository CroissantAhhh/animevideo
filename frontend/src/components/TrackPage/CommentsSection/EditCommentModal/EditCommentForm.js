import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateComment } from "../../../../store/comments";
import "./EditCommentForm.css";

function EditCommentForm({ comment }) {
    const [commentBody, setCommentBody] = useState(comment.body);
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...comment,
            body: commentBody
        };

        dispatch(updateComment(payload));
    }
    return (
        <div className="comment-edit">
            <form className="comment-edit-form" onSubmit={onSubmit}>
                <h2>Editing Comment:</h2>
                <label htmlFor='edit-comment-body'>Edit:</label>
                <textarea id='edit-comment-body' value={commentBody} onChange={e => setCommentBody(e.target.value)} />
                <button className="submit-edit-comment" type="submit">Edit Comment</button>
            </form>
        </div>
    )
}

export default EditCommentForm;
