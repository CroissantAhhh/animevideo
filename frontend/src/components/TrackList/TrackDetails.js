import { useCurrentSongs } from "../../context/currentSongsContext";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addTrackToPlaylist } from "../../store/playlist";

const TrackDetails = ({ track }) => {
    const dispatch = useDispatch();
    const { currentSongs, injectSongs } = useCurrentSongs();
    const tracks = useSelector(state => Object.values(state.tracks));
    const sessionUser = useSelector(state => state.session.user);
    const yourSongsPlaylist = useSelector(state => Object.values(state.playlists.user))[0];
    const [ songInYourSongs, setSongInYourSongs ] = useState(yourSongsContainsTrack());

    function findPosition() {
        let index = 0;
        for (let singleTrack of tracks) {
            if (track === singleTrack) {
                return index;
            };
            index++;
        };
    };

    function yourSongsContainsTrack() {
        for (let playlistTrack of yourSongsPlaylist?.playlistLinks) {
            if (track.id === playlistTrack?.trackId) {
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        setSongInYourSongs(yourSongsContainsTrack());
    }, [setSongInYourSongs, yourSongsContainsTrack]);

    function addTrack(playlist) {
        dispatch(addTrackToPlaylist(playlist.id, track.id));
    };

    useEffect(() => {

    },[songInYourSongs])


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
                <div className="track-section-buttons">
                    <button className={"add-track" + (songInYourSongs ? " in-your-songs" : "")}  onClick={() => addTrack(yourSongsPlaylist)} style={{display: `${sessionUser ? "block" : "none" }`}}>
                        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="40px" height="40px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" style={{transform: "rotate(360deg)"}} fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </button>
                    <button className="play-track"  onClick={() => injectSongs(tracks, findPosition(), currentSongs?.isShuffle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="40px" height="40px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{transform: "rotate(360deg)"}}><path d="M10 16.5v-9l6 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"></path></svg>
                    </button>
                    <button className="add-track-playlist" style={{display: `${sessionUser ? "block" : "none" }`}}>
                        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="40px" height="40px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" style={{transform: "rotate(360deg)"}}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" fill="currentColor"/></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default TrackDetails;
