import { useCurrentSong } from "../../context/currentSongContext";
import AudioPlayer from "react-h5-audio-player";
import "./SongPlayerBar.css";


function SongPlayerBar() {
    const { currentSong } = useCurrentSong();

    return (
        <div className="song-player-bar">
            <div className="song-info">
                <img src={currentSong.trackImageURL} alt="track artwork" height="100px" width="100px"></img>
                <div className="song-text-info">
                    <h2 className="song-text-track">{currentSong.name}</h2>
                    <h2 className="song-text-media">{currentSong.media}</h2>
                </div>
            </div>
            <AudioPlayer autoPlay src={currentSong.fileURL}></AudioPlayer>
            <div className="song-player-bar-padding"></div>
        </div>
    );
};

export default SongPlayerBar;
