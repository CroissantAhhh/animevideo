import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCurrentSong } from "../../context/currentSongContext";
import { loadComments } from "../../store/comments";
import { loadTargetTrack } from "../../store/tracks";
import { process } from "../../utils/process";
import CommentsSection from "./CommentsSection";
import "./TrackPage.css";

function TrackPage() {
    const { setCurrentSong } = useCurrentSong();
    const dispatch = useDispatch();
    const { mediumName, trackName } = useParams();
    useEffect(() => {
        dispatch(loadTargetTrack(mediumName, trackName));
    }, [dispatch, mediumName, trackName])

    const targetTrack = useSelector(state => Object.values(state.tracks))[0];

    useEffect(() => {
        dispatch(loadComments(targetTrack?.id));
    }, [dispatch, targetTrack?.id]);

    const comments = useSelector(state => Object.values(state.comments));

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
                <form className="add-coment-section">
                    <label htmlFor="add-coment-form">Add a Comment:</label>
                    <textarea id="add-comment-form" name="add-comment-form"></textarea>
                </form>
                <button>Add Comment</button>
                <CommentsSection comments={comments}></CommentsSection>
            </div>
        </div>
    )
}

export default TrackPage;
