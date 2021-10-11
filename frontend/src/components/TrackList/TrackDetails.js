import { useCurrentSong } from "../../context/currentSongContext";

const TrackSection = ({ track }) => {
    const { setCurrentSong } = useCurrentSong();
    return (
        <div className="trackSection">
            <h1>{track.name}</h1>
            <img src={track.trackImageURL} alt="track artwork" height="100px" width="100px"/>
            <h2>{track.medium.name}</h2>
            <h2>{track.album.artist}</h2>
            <h2>{track.album.name}</h2>
            <button className="play-track" value={track.fileURL} onClick={(e) => {
                setCurrentSong({
                    fileURL: e.target.value,
                    imageURL: track.trackImageURL,
                    name: track.name,
                    media: track.medium.name,
                    artist: track.album.artist,
                    album: track.album.name
                })
            }}>Play</button>
        </div>
    );
};

export default TrackSection;
