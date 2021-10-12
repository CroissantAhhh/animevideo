import { useCurrentSong } from "../../context/currentSongContext";
import { Link } from 'react-router-dom';
import { process } from "../../utils/process";

const TrackDetails = ({ track }) => {
    const { setCurrentSong } = useCurrentSong();

    return (
        <div className="track-section">
            <Link to={`/${process(track.medium.name)}/tracks/${process(track.name)}`}>{track.name}</Link>
            <img src={track.trackImageURL} alt="track artwork" height="100px" width="100px"/>
            <Link to={`/${process(track.medium.name)}`}>{track.medium.name}</Link>
            <h2>{track.album.artist}</h2>
            <Link to={`/${process(track.medium.name)}/albums/${process(track.album.name)}`}>{track.album.name}</Link>
            <button className="play-track" value={track.fileURL} onClick={(e) => {
                setCurrentSong({
                    fileURL: e.target.value,
                    trackImageURL: track.trackImageURL,
                    name: track.name,
                    media: track.medium.name,
                    artist: track.album.artist,
                    album: track.album.name
                })
            }}>Play</button>
        </div>
    );
};

export default TrackDetails;
