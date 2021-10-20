import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMedia } from "../../../store/media";
import MediaResult from "./MediaResult";

function MediaResults({ query }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mediaFound, setMediaFound] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchMedia(query)).then(() => setMediaFound(true));
    },[dispatch, query]);

    const media = useSelector(state => Object.values(state.media));
    const mediaArray = Object.values(media);

    useEffect(() => {
        if (mediaFound) {
            setIsLoaded(true);
        }
    }, [mediaFound]);

    return (
        <div className="media-results-container">
            {isLoaded &&
                <div className="media-results">
                    <div className="media-results-title">
                        <h2 className="media-results-header">Media:</h2>
                    </div>
                    <div className="media-results-content">
                        {mediaArray.length > 0 && mediaArray.map(medium => {
                            return <MediaResult medium={medium} key={medium.id}></MediaResult>
                        })}
                        {mediaArray.length === 0 &&
                            <h3>No results found.</h3>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default MediaResults;
