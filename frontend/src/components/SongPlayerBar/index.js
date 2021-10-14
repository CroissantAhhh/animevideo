import { useCurrentSong } from "../../context/currentSongContext";
import AudioControls from "./AudioControls";
import "./SongPlayerBar.css";


function SongPlayerBar() {
    const { currentSong } = useCurrentSong();

    return (
        <div className="song-player-bar">
            <AudioControls file={currentSong.fileURL}></AudioControls>
            <div className="song-info">
                <img src={currentSong.trackImageURL} alt="track artwork" height="100px" width="100px"></img>
                <div className="song-text-info">
                    <h2>{currentSong.name}</h2>
                    <h2>{currentSong.media}</h2>
                    <h2>{currentSong.album}</h2>
                </div>
            </div>

        </div>
    );
};

export default SongPlayerBar;
