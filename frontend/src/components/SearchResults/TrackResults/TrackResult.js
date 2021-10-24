import { Link } from 'react-router-dom';
import { useCurrentSongs } from "../../../context/currentSongsContext";
import { useSelector } from "react-redux";
import "./TrackResult.css";

function TrackResult({ track }) {
    const { injectSongs } = useCurrentSongs();
    const tracks = useSelector(state => Object.values(state.tracks));

    function findPosition() {
        let index = 0;
        for (let singleTrack of tracks) {
            if (track === singleTrack) {
                return index;
            };
            index++;
        };
    };

    return (
        <div className="track-result-container">
            <Link to={`/tracks/${track.id}`}>{track.name}</Link>
            <div className="track-image-play">
                <img src={track.trackImageURL} alt="track artwork" height="140px" width="140px"></img>
                <button className="play-track" value={track.fileURL} onClick={() => injectSongs(tracks, findPosition())}>Play
                </button>
            </div>
        </div>
    )
}

export default TrackResult;
