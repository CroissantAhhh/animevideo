import { useEffect } from "react";
import { useCurrentSong } from "../../context/currentSongContext";


function SongPlayerBar() {
    const { currentSong } = useCurrentSong();

    return (
        <audio controls src={currentSong} type="audio/mpeg" autoPlay={true}>
        </audio>
    );
};

export default SongPlayerBar;
