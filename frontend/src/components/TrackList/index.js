import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { loadTracks } from '../../store/tracks';
import TrackDetails from "./TrackDetails";

function TrackList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTracks())
    },[dispatch])
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
