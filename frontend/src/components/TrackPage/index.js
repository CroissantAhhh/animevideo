import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouteMatch } from "react-router";
import { useCurrentSong } from "../../context/currentSongContext";
import { loadComments } from "../../store/comments";
import CommentsSection from "./CommentsSection";

function TrackPage({ track }) {
    const { setCurrentSong } = useCurrentSong();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadComments(track.id));
    },[dispatch, track]);
    const comments = useSelector(state => Object.values(state.comments));

    const { path, url } = useRouteMatch();
    console.log(path, url);
    return (
        <div className="track-page">
            <div className="track-page-section">
                <h1>{track.name}</h1>
                <img src={track.trackImageURL} alt="track artwork" height="100px" width="100px"/>
                <h2>{track.medium.name}</h2>
                <h2>{track.album.artist}</h2>
                <h2>{track.album.name}</h2>
                <button className="play-track" value={track.fileURL} onClick={(e) => {
                    setCurrentSong({
                        fileURL: e.target.value,
                        imageURL: track.trackImageURL,
                        name: track.name,
                        media: track.medium.name,
                        artist: track.album.artist,
                        album: track.album.name
                    })
                }}>Play</button>
            </div>
            <div className="comments-section">
                <button>Add Comment</button>
                <CommentsSection comments={comments}></CommentsSection>
            </div>
        </div>
    )
}

export default TrackPage;
