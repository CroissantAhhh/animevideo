import { Link } from 'react-router-dom';
import "./TrackResult.css";

function TrackResult({ track }) {

    return (
        <div className="track-result-container">
            <Link to={`/tracks/${track.id}`}>{track.name}</Link>
            <div className="track-image-play">
                <img src={track.trackImageURL} alt="track artwork" height="140px" width="140px"></img>
            </div>
        </div>
    )
}

export default TrackResult;
