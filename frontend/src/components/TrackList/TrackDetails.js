

const TrackSection = ({ track }) => {
    return (
        <div className="trackSection">
            <h1>{track.name}</h1>
            <h2>{track.medium.name}</h2>
            <h2>{track.artist.name}</h2>
            <h2>{track.album.name}</h2>
            <button id="play-track">Play</button>
        </div>
    );
};

export default TrackSection;
