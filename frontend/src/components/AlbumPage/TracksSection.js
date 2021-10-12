import TrackDetails from "../TrackList/TrackDetails";

function TracksSection({ tracks }) {
    return (
        <div className="tracks-section">
            <h2>Tracks</h2>
            {tracks.map((track, index) => {
                return (
                    <TrackDetails track={track} key={track.id}></TrackDetails>
                )
            })}
        </div>
    )
}

export default TracksSection;
