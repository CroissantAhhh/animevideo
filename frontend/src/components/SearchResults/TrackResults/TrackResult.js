import { Link } from 'react-router-dom';
import { useCurrentSong } from "../../../context/currentSongContext";
import { process } from "../../../utils/process";

function TrackResult({ track }) {
    const { setCurrentSong } = useCurrentSong();
    return (
        <div className="track-result">
            <Link to={`/${process(track.medium.name)}/tracks/${process(track.name)}`}>{track.name}</Link>
            <img src={track.trackImageURL} alt="track artwork" height="100px" width="100px"></img>
            <button value={track.fileURL} onClick={(e) => {
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
    )
}

export default TrackResult;
