import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCurrentSong } from "../../context/currentSongContext";
import { loadComments, addComment } from "../../store/comments";
import { loadTargetTrack } from "../../store/tracks";
import { process } from "../../utils/process";
import CommentsSection from "./CommentsSection";
import "./TrackPage.css";

function TrackPage() {
    const [commentBody, setCommentBody] = useState("");
    const [commentAdded, setCommentAdded] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const { setCurrentSong } = useCurrentSong();
    const dispatch = useDispatch();
    const { mediumName, trackName } = useParams();

    useEffect(() => {
        dispatch(loadTargetTrack(mediumName, trackName));
    }, [dispatch, mediumName, trackName])

    const targetTrack = useSelector(state => Object.values(state.tracks))[0];

    useEffect(() => {
        dispatch(loadComments(targetTrack?.id));
        setCommentAdded(false);
    }, [dispatch, targetTrack?.id, commentAdded]);

    const comments = useSelector(state => Object.values(state.comments));

    const handleAddComment = async (e) => {
        e.preventDefault();
        const payload = {
            body: commentBody,
            userId: sessionUser.id,
            trackId: targetTrack?.id
        }

        dispatch(addComment(payload));
        setCommentAdded(true);
    };

    return (
        <div className="track-page">
            <div className="track-page-section">
                <h1>{targetTrack?.name}</h1>
                <img src={targetTrack?.trackImageURL} alt="track artwork" height="100px" width="100px"/>
                <Link to={`/${process(targetTrack?.medium?.name)}`}>{targetTrack?.medium?.name}</Link>
                <h2>{targetTrack?.album?.artist}</h2>
                <Link to={`/${process(targetTrack?.medium?.name)}/albums/${process(targetTrack?.album?.name)}`}>{targetTrack?.album?.name}</Link>
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
                <form className="add-coment-section" onSubmit={handleAddComment}>
                    <label htmlFor="add-coment-form">Add a Comment:</label>
                    <textarea
                    id="add-comment-form"
                    name="add-comment-form"
                    value={commentBody}
                    onChange={e => setCommentBody(e.target.value)}></textarea>
                    <button className="add-comment-button" type="submit">Add Comment</button>
                </form>
                <CommentsSection comments={comments}></CommentsSection>
            </div>
        </div>
    )
}

export default TrackPage;
