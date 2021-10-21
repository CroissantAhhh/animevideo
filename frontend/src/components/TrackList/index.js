import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import TrackDetails from "./TrackDetails";
import { loadRandomTracks } from "../../store/tracks";
import "./TrackList.css";

function TrackList() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [tracksLoaded, setTracksLoaded] = useState(false);
    const dispatch = useDispatch();

    const tracks = useSelector(state => Object.values(state.tracks));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(loadRandomTracks()).then(() => setTracksLoaded(true));
    }, [dispatch]);

    useEffect(() => {
        if (tracksLoaded) {
            setIsLoaded(true);
        }
    }, [tracksLoaded]);

    return (
        <div className="track-list-container">
            {isLoaded &&
                <div className="track-list">
                    <div className="track-list-title">
                        <h2>Featured Tracks of the Day</h2>
                    </div>

                    {tracks.map(track => {
                        return <TrackDetails track={track} key={track.id}></TrackDetails>
                    })}
                </div>
            }
        </div>
    )
}

export default TrackList;
