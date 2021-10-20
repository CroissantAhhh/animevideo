import { useCurrentSong } from "../../context/currentSongContext";
import { Link } from 'react-router-dom';

const TrackDetails = ({ track }) => {
    const { setCurrentSong } = useCurrentSong();

    return (
        <div className="track-section">
            <div className="track-section-info-links">
                <Link className="ts-track-link" to={`/tracks/${track.id}`}>{track.name}</Link>
                <Link className="ts-media-link" to={`/media/${track.medium.id}`}>{track.medium.name}</Link>
                <h2 className="ts-artist">{track.album.artist}</h2>
                <Link className="ts-album-link" to={`/albums/${track.album.id}`}>{track.album.name}</Link>
            </div>
            <div className="track-section-art-play">
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
        </div>
    );
};
export default TrackDetails;
