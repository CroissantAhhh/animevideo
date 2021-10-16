import TrackDetails from "../TrackList/TrackDetails";

function TracksSection({ tracks }) {
    return (
        <div className="tracks-section">
            <div className="tracks-section-title">
                <h2>Tracks</h2>
            </div>
            {tracks.map((track) => {
                return (
                    <TrackDetails track={track} key={track.id}></TrackDetails>
                )
            })}
        </div>
    )
}

export default TracksSection;
