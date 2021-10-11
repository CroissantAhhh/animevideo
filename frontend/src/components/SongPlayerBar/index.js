import { useEffect } from "react";
import { useCurrentSong } from "../../context/currentSongContext";
import "./SongPlayerBar.css";


function SongPlayerBar() {
    const { currentSong } = useCurrentSong();

    return (
        <div className="song-player-bar">
            <audio controls src={currentSong.fileURL} type="audio/mpeg" autoPlay={true}/>
            <img src={currentSong.imageURL} alt="track artwork" height="200px" width="200px"></img>
            <h2>{currentSong.name}</h2>
            <h2>{currentSong.media}</h2>
            <h2>{currentSong.album}</h2>
        </div>
    );
};

export default SongPlayerBar;
