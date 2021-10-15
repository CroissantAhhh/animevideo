import { useCurrentSong } from "../../context/currentSongContext";
import { Link } from 'react-router-dom';
import { process } from "../../utils/process";

const TrackDetails = ({ track }) => {
    const { setCurrentSong } = useCurrentSong();

    return (
        <div className="track-section">
            <div className="track-section-info-links">
                <Link className="ts-track-link" to={`/${process(track.medium.name)}/tracks/${process(track.name)}`}>{track.name}</Link>
                <Link className="ts-media-link" to={`/${process(track.medium.name)}`}>{track.medium.name}</Link>
                <h2 className="ts-artist">{track.album.artist}</h2>
                <Link className="ts-album-link" to={`/${process(track.medium.name)}/albums/${process(track.album.name)}`}>{track.album.name}</Link>
            </div>
            <img src={track.trackImageURL} alt="track artwork" height="160px" width="160px"/>
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
