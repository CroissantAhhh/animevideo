import CommentSection from "./CommentSection";

function CommentsSection({ comments }) {
    return (
        <div className="comments-section">
            <h2>Comments</h2>
            {comments.map(comment => {
                return <CommentSection comment={comment} key={comment.id}></CommentSection>
            })}
        </div>
    )
}

export default CommentsSection;
