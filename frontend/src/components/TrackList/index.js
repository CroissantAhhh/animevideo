import { useSelector } from 'react-redux';
import TrackDetails from "./TrackDetails";

function TrackList() {
    const tracks = useSelector(state => Object.values(state.tracks));

    return (
        <>
            {tracks.map(track => {
                return <TrackDetails track={track} key={track.id}></TrackDetails>
            })}
        </>
    )
}

export default TrackList;
