import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useCurrentSong } from "../../context/currentSongContext";
import { loadComments } from "../../store/comments";
import { loadTargetTrack } from "../../store/tracks";
import CommentsSection from "./CommentsSection";
import "./TrackPage.css";

function TrackPage() {
    const { setCurrentSong } = useCurrentSong();
    const dispatch = useDispatch();
    const { mediumName, trackName } = useParams();
    console.log(mediumName, trackName)
    useEffect(() => {
        console.log("useEffect triggered");
        dispatch(loadTargetTrack(mediumName, trackName));
    }, [dispatch, mediumName, trackName])

    const targetTrack = useSelector(state => Object.values(state.tracks));

    console.log(targetTrack?.id);
    useEffect(() => {
        dispatch(loadComments(targetTrack?.id));
    }, [dispatch,targetTrack?.id]);

    const comments = useSelector(state => Object.values(state.comments));

    return (
        <div className="track-page">
            <div className="track-page-section">
                <h1>{targetTrack?.name}</h1>
                <img src={targetTrack?.trackImageURL} alt="track artwork" height="100px" width="100px"/>
                <h2>{targetTrack?.medium.name}</h2>
                <h2>{targetTrack?.album.artist}</h2>
                <h2>{targetTrack?.album.name}</h2>
                <button className="play-track" value={targetTrack?.fileURL} onClick={(e) => {
                    setCurrentSong({
                        fileURL: e.target.value,
                        trackImageURL: targetTrack?.trackImageURL,
                        name: targetTrack?.name,
                        media: targetTrack?.medium.name,
                        artist: targetTrack?.album.artist,
                        album: targetTrack?.album.name
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
