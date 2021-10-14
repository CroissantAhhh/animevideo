import { playIcon, pauseIcon, soundIcon, muteIcon } from "./ButtonIcons";
import { useState, useEffect } from "react";
import { useCurrentSong } from "../../../context/currentSongContext";
import "../SongPlayerBar.css";

function AudioControls() {
    const [isPlaying, setIsPlaying] = useState(true);
    const { currentSong } = useCurrentSong();
    const audio = new Audio(currentSong.fileURL);
    audio.autoplay = true;

    useEffect(() => {
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    console.log(audio);
    const playerButton = <button className="player-button" value={isPlaying} onClick={e => setIsPlaying(!e.target.value)}>{playIcon}</button>;
    const progressBar = <input type="range" className="timeline" max="100" />;
    const soundButton = <button className="sound-button">{soundIcon}</button>;


    return (
        <div className="song-player">
            <div className="controls">
                {playerButton}
                {progressBar}
                {soundButton}
            </div>
        </div>
    )
}

export default AudioControls;
