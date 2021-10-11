import { useCurrentSong } from "../../context/currentSongContext";
import { Route, Link, useRouteMatch } from 'react-router-dom';
import TrackPage from "../TrackPage";

const TrackDetails = ({ track }) => {
    const { setCurrentSong } = useCurrentSong();

    function processMediaName(name) {
        return name.toLowerCase().split('').filter(char => /[a-zA-Z]/.test(char)).join('');
    }
    function processTrackName(name) {
        return name.toLowerCase().split(" ").join("-");
    }
    let { path, url } = useRouteMatch();

    return (
        <div className="track-section">
            <Link to={`/${processMediaName(track.medium.name)}/${processTrackName(track.name)}`}>{track.name}</Link>
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
            <Route path="/:mediumName/:trackName">
                <TrackPage track={track}></TrackPage>
            </Route>
        </div>
    );
};

export default TrackDetails;
