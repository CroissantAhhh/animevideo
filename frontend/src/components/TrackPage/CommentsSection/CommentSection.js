import { useSelector } from "react-redux";

function CommentSection({ comment }) {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="comment-section">
            <p>{comment.body}</p>
        </div>
    )
}

export default CommentSection;
