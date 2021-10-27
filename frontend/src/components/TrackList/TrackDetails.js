import { useCurrentSongs } from "../../context/currentSongsContext";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const TrackDetails = ({ track }) => {
    const { currentSongs, injectSongs } = useCurrentSongs();
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
        <div className="track-section">
            <div className="track-section-info-links">
                <Link className="ts-track-link" to={`/tracks/${track.id}`}>{track.name}</Link>
                <Link className="ts-media-link" to={`/media/${track.medium.id}`}>{track.medium.name}</Link>
                <h2 className="ts-artist">{track.album.artist}</h2>
                <Link className="ts-album-link" to={`/albums/${track.album.id}`}>{track.album.name}</Link>
            </div>
            <div className="track-section-art-play">
                <img src={track.trackImageURL} alt="track artwork" height="160px" width="160px"/>
                <button className="play-track"  onClick={() => injectSongs(tracks, findPosition(), currentSongs?.isShuffle)}
                >Play</button>
            </div>
        </div>
    );
};
export default TrackDetails;
