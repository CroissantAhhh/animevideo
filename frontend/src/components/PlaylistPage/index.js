import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { loadPlaylistById } from "../../store/playlist";
import { loadTracksByPlaylist } from "../../store/tracks"
import TracksSection from "../TrackList/"

function PlaylistPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [playlistFound, setPlaylistFound] = useState(false);
    const [tracksFound, setTracksFound] = useState(false);
    const dispatch = useDispatch();
    const { playlistId } = useParams();

    useEffect(() => {
        dispatch(loadPlaylistById(playlistId)).then(() => setPlaylistFound(true));
    }, [dispatch, playlistId])

    const targetPlaylist = useSelector(state => Object.values(state.playlists.other))[0];

    useEffect(() => {
        document.title = targetPlaylist?.name;
        window.scrollTo(0, 0);
    },[targetPlaylist?.name]);

    useEffect(() => {
        dispatch(loadTracksByPlaylist(playlistId)).then(() => setTracksFound(true));
    }, [dispatch, playlistId])

    const tracks = useSelector(state => Object.values(state.tracks));

    useEffect(() => {
        if (playlistFound && tracksFound) {
            setIsLoaded(true);
        }
    }, [playlistFound, tracksFound]);

    return (
        <h1>Playlists</h1>
    )
}

export default PlaylistPage;
