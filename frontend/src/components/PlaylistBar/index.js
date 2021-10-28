import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserPlaylists } from "../../store/playlist";
import "./PlaylistBar.css";


function PlaylistBar() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserPlaylists(sessionUser?.id))
    }, [sessionUser?.id])

    const userPlaylists = useSelector(state => Object.values(state.playlists.user));

    return (
        <div className="playlist-bar-container">
            <div className="playlist-bar">
                <h2>Your Playlists</h2>
                <button>Create New Playlist</button>
                {userPlaylists.map(playlist => {
                    return <Link to={`/playlists/${playlist.id}`} key={playlist.id}>{playlist.name}</Link>
                })}
            </div>
        </div>
    )
}

export default PlaylistBar;
