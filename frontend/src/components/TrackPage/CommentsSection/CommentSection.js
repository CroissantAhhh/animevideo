
import DeleteCommentModal from "./DeleteCommentModal";
import EditCommentModal from "./EditCommentModal";

function CommentSection({ comment }) {

    return (
        <div className="comment-section">
            <div className="comment-section-body">
                <p>{comment.body}</p>
            </div>
            <div className="edit-delete-buttons">
                <EditCommentModal comment={comment}></EditCommentModal>
                <DeleteCommentModal comment={comment}></DeleteCommentModal>
            </div>
        </div>
    )
}

export default CommentSection;
