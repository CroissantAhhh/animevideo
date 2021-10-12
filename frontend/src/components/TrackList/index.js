import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TrackDetails from "./TrackDetails";
import { loadRandomTracks } from "../../store/tracks";

function TrackList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadRandomTracks());
    }, [dispatch]);
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
