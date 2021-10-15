
import DeleteCommentModal from "./DeleteCommentModal";
import EditCommentModal from "./EditCommentModal";

function CommentSection({ comment }) {

    return (
        <div className="comment-section">
            <p>{comment.body}</p>
            <EditCommentModal comment={comment}></EditCommentModal>
            <DeleteCommentModal comment={comment}></DeleteCommentModal>
        </div>
    )
}

export default CommentSection;
