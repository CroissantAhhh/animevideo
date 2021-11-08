import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { PlaylistPopout } from "../../context/PlaylistPopout";
import "./AddPlaylistPopout.css";

function AddPlaylistPopout({ track, playlists }) {
    const [ showPopout, setShowPopout ] = useState(false);
    const [ popoutStyle, setPopoutStyle ] = useState({});
    const sessionUser = useSelector(state => state.session.user);
    const yourPlaylists = useSelector(state => Object.values(state.playlists.user));

    const topScroll = window.pageYOffset || document.documentElement.scrollTop;
    const leftScroll = window.pageXOffset || document.documentElement.scrollLeft;

    // if scroll happens, set it to the previous value
    window.onscroll = () => {
        if (showPopout) {
            window.scrollTo(leftScroll, topScroll);
        }
    };

    function openMenu(e) {
        setShowPopout(true);
        const buttonRect = e.target.getBoundingClientRect();
        const fixedStyle = {
            width: '200px',
            visibility: 'visible',
            backgroundColor: 'rgb(92, 92, 92)',
            position: 'absolute',
            zIndex: 1,
            borderRadius: '10px',
            padding: '10px',
        };
        if (buttonRect.top > 500) {
            setPopoutStyle({...fixedStyle, left: buttonRect.left + 50, bottom: window.innerHeight - buttonRect.bottom })
        } else {
            setPopoutStyle({...fixedStyle, left: buttonRect.left + 50, top: buttonRect.top })
        }
    };

    return (
        <>
            <button className="add-track-playlist" onClick={openMenu} style={{display: `${sessionUser ? "block" : "none" }`}}>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="40px" height="40px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" style={{transform: "rotate(360deg)"}}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" fill="currentColor"/></svg>
            </button>
            {showPopout && (
                <PlaylistPopout onClose={() => setShowPopout(false)}>
                    <div className="add-playlist-popout" style={popoutStyle}>
                        <div className="add-playlist-popout-content">
                            <h2>Add To Playlist</h2>
                            {yourPlaylists.map((yourPlaylist) => {
                                return <button key={yourPlaylist.id}>{yourPlaylist.name}</button>
                            })}
                        </div>
                    </div>
                </PlaylistPopout>
            )}
        </>
    );
}

export default AddPlaylistPopout;
