import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchTracks } from "../../../store/tracks";
import TrackResult from "./TrackResult";

function TrackResults({ query }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchTracks(query));
    },[dispatch, query]);
    const tracks = useSelector(state => Object.values(state.tracks));
    const tracksArray = Object.values(tracks);

    return (
        <div className="track-results">
            <h2>Tracks</h2>
            {tracksArray.map(track => {
                return <TrackResult track={track} key={track.id}></TrackResult>
            })}
        </div>
    )
}

export default TrackResults;
