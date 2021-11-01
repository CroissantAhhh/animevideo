import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserPlaylists } from "../../store/playlist";
import "./PlaylistBar.css";


function PlaylistBar() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionUser) {
            dispatch(loadUserPlaylists(sessionUser?.id))
        }
    }, [dispatch, sessionUser?.id])

    const userPlaylists = useSelector(state => Object.values(state.playlists.user));

    return (
        <div className="playlist-bar-container">
            <div className="playlist-bar">
                <h2>Your Playlists</h2>
                <button>Create New Playlist</button>
                <div className="playlist-links">
                    {userPlaylists?.map(playlist => {
                        return <Link to={`/playlists/${playlist.id}`} key={String(playlist.id + playlist.name)}>{playlist.name}</Link>
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlaylistBar;
