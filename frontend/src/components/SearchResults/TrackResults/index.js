import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchTracks } from "../../../store/tracks";
import TrackResult from "./TrackResult";

function TrackResults({ query }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const prevTracksRef = useRef();

    useEffect(() => {
        dispatch(searchTracks(query));
    },[dispatch, query]);

    const tracks = useSelector(state => Object.values(state.tracks));

    useEffect(() => {
        prevTracksRef.current = tracks;
    })
    const prevTracks = prevTracksRef.current;

    const tracksArray = Object.values(tracks);

    useEffect(() => {
        if (prevTracks && prevTracks !== tracks) {
            setIsLoaded(true);
        }
    }, [tracks, prevTracks]);

    return (
        <div className="track-results-container">
            {isLoaded &&
                <div className="track-results">
                    <div className="track-results-title">
                        <h2 className="track-results-header">Tracks</h2>
                    </div>
                    <div className="track-results-content">
                        {tracksArray.length > 0 && tracksArray.map(track => {
                            return <TrackResult track={track} key={track.id}></TrackResult>
                        })}
                        {tracksArray.length === 0 &&
                            <h3>No results found.</h3>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default TrackResults;
