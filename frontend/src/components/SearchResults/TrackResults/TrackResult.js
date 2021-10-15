import { Link } from 'react-router-dom';
import { useCurrentSong } from "../../../context/currentSongContext";
import { process } from "../../../utils/process";
import "./TrackResult.css";

function TrackResult({ track }) {
    const { setCurrentSong } = useCurrentSong();
    return (
        <div className="track-result-container">
            <Link to={`/${process(track.medium.name)}/tracks/${process(track.name)}`}>{track.name}</Link>
            <div className="track-image-play">
                <img src={track.trackImageURL} alt="track artwork" height="140px" width="140px"></img>
                <button className="play-track" value={track.fileURL} onClick={(e) => {
                    setCurrentSong({
                        fileURL: e.target.value,
                        trackImageURL: track.trackImageURL,
                        name: track.name,
                        media: track.medium.name,
                        artist: track.album.artist,
                        album: track.album.name
                    })}}>Play
                </button>
            </div>
        </div>
    )
}

export default TrackResult;
