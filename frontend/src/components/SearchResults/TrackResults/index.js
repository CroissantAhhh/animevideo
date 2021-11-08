import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchTracks } from "../../../store/tracks";
import TrackDetails from "../../TrackList/TrackDetails";

function TrackResults({ query }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [tracksFound, setTracksFound] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchTracks(query)).then(() => setTracksFound(true));
    },[dispatch, query]);

    const tracks = useSelector(state => Object.values(state.tracks));
    const tracksArray = Object.values(tracks);

    useEffect(() => {
        if (tracksFound) {
            setIsLoaded(true);
        }
    }, [tracksFound]);

    return (
        <div className="track-results-container">
            {isLoaded &&
                <div className="track-results">
                    <div className="track-results-title">
                        <h2 className="track-results-header">Tracks</h2>
                    </div>
                    <div className="track-results-content">
                        {tracksArray.length > 0 && tracksArray.map(track => {
                            return <TrackDetails track={track} key={track.id}></TrackDetails>
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
