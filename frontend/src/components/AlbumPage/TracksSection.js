import TrackDetails from "../TrackList/TrackDetails";

function TracksSection({ tracks }) {
    return (
        <div className="tracks-section">
            <h2>Tracks</h2>
            {tracks.map((track, index) => {
                return (
                    <>
                        <h3 key={track.id}>{index + 1}</h3>
                        <TrackDetails track={track}></TrackDetails>
                    </>
                )
            })}
        </div>
    )
}

export default TracksSection;
