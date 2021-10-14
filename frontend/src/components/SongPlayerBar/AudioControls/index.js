import { playIcon, pauseIcon, soundIcon, muteIcon } from "./ButtonIcons";
import "../SongPlayerBar.css";

function AudioControls({ file }) {

    const audio = new Audio(file);
    console.log(audio);
    const playerButton = <button className="player-button" onClick={toggleAudio}>{playIcon}</button>;
    const progressBar = <input type="range" className="timeline" max="100" value="0" />;
    const soundButton = <button className="sound-button">{soundIcon}</button>;

    function toggleAudio () {
        if (audio.paused) {
          audio.play();
          playerButton.innerHTML = pauseIcon;
        } else {
          audio.pause();
          playerButton.innerHTML = playIcon;
        }
    };

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
