import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCurrentSong } from "../../context/currentSongContext";
import { loadComments, addComment } from "../../store/comments";
import { loadTrackById } from "../../store/tracks";
import CommentsSection from "./CommentsSection";
import "./TrackPage.css";

function TrackPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [trackFound, setTrackFound] = useState(false);
    const [commentsFound, setCommentsFound] = useState(false);
    const [commentBody, setCommentBody] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);
    const { setCurrentSong } = useCurrentSong();
    const dispatch = useDispatch();
    const { trackId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        dispatch(loadTrackById(trackId)).then(() => setTrackFound(true));
    }, [dispatch, trackId])

    const targetTrack = useSelector(state => Object.values(state.tracks))[0];

    useEffect(() => {
        dispatch(loadComments(trackId)).then(() => setCommentsFound(true));
    }, [dispatch, trackId]);

    const comments = useSelector(state => Object.values(state.comments));

    useEffect(() => {
        if (trackFound && commentsFound) {
            setIsLoaded(true);
        }
    }, [trackFound, commentsFound]);

    const validate = () => {
        const errors = [];
        if (!commentBody) errors.push('Empty comment body');
        return errors;
    };

    const handleAddComment = async (e) => {
        e.preventDefault();

        const errors = validate();

        if (errors.length > 0) return setValidationErrors(errors);

        const payload = {
            body: commentBody,
            userId: sessionUser.id,
            trackId: trackId
        };

        dispatch(addComment(payload));
        setCommentBody("");
        setValidationErrors([]);
    };

    return (
        <div className="track-page-container">
            {isLoaded &&
                <div className="track-page">
                    <div className="track-page-section">
                        <div className="track-page-details-section">
                            <h1>{targetTrack?.name}</h1>
                            <Link to={`/media/${targetTrack?.medium?.id}`}>{targetTrack?.medium?.name}</Link>
                            <h2>{targetTrack?.album?.artist}</h2>
                            <Link to={`/albums/${targetTrack?.album?.id}`}>{targetTrack?.album?.name}</Link>
                        </div>
                        <img src={targetTrack?.trackImageURL} alt="track artwork" height="300px" width="300px"/>
                        <button className="play-track" value={targetTrack?.fileURL} onClick={(e) => {
                            setCurrentSong({
                                fileURL: e.target.value,
                                trackImageURL: targetTrack?.trackImageURL,
                                name: targetTrack?.name,
                                media: targetTrack?.medium?.name,
                                artist: targetTrack?.album?.artist,
                                album: targetTrack?.album?.name
                            })
                        }}>Play</button>
                    </div>
                    <div className="comments-section">
                        {!sessionUser && (<h2 className="comment-not-logged">Log in as a user to comment!</h2>)}
                        {sessionUser && (<form className="add-coment-section" onSubmit={handleAddComment}>
                            {validationErrors.length > 0 && (
                                <div>
                                    The following errors were found:
                                    <ul>
                                        {validationErrors.map(error => <li key={error}>{error}</li>)}
                                    </ul>
                                </div>
                            )}
                            <div className="add-comment-section">
                                <label htmlFor="add-coment-form">Add a Comment:</label>
                                <textarea rows="5"
                                id="add-comment-form"
                                name="add-comment-form"
                                value={commentBody}
                                onChange={e => setCommentBody(e.target.value)}></textarea>
                                <button className="add-comment-button" type="submit">Add Comment</button>
                            </div>
                        </form>)}
                        <CommentsSection comments={comments}></CommentsSection>
                    </div>
                </div>
            }
        </div>
    )
}

export default TrackPage;
