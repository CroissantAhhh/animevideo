import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./PlaylistPopout.css";

export const PlaylistPopoutContext = React.createContext();

export const usePlaylistPopout = () => useContext(PlaylistPopoutContext);

export default function PlaylistPopoutProvider({ children }) {
    const playlistPopoutRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
      setValue(playlistPopoutRef.current);
    }, [])


    return (
      <>
        <PlaylistPopoutContext.Provider value={value}>
          {children}
        </PlaylistPopoutContext.Provider>
        <div ref={playlistPopoutRef} />
      </>
    );
}

export function PlaylistPopout({ onClose, children }) {
    const playlistPopoutNode = useContext(PlaylistPopoutContext);
    if (!playlistPopoutNode) return null;

    return ReactDOM.createPortal(
      <div id="playlist-popout">
        <div id="playlist-popout-background" onClick={onClose} />
        <div id="playlist-popout-content">
          {children}
        </div>
      </div>,
      playlistPopoutNode
    );
}
