import { useCurrentSong } from "../../context/currentSongContext";

const TrackSection = ({ track }) => {
    const { currentSong, setCurrentSong } = useCurrentSong();
    return (
        <div className="trackSection">
            <h1>{track.name}</h1>
            <h2>{track.medium.name}</h2>
            <h2>{track.artist.name}</h2>
            <h2>{track.album.name}</h2>
            <button className="play-track" value={track.fileURL} onClick={(e) => setCurrentSong(e.target.value)}>Play</button>
        </div>
    );
};

export default TrackSection;
