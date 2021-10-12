
function CommentSection({ comment }) {
    console.log(comment);
    return (
        <div className="comment-section">
            <p>{comment.body}</p>
        </div>
    )
}

export default CommentSection;
