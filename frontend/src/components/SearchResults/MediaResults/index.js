import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMedia } from "../../../store/media";
import MediaResult from "./MediaResult";

function MediaResults({ query }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const prevMediaRef = useRef();

    useEffect(() => {
        dispatch(searchMedia(query));
    },[dispatch, query]);

    const media = useSelector(state => Object.values(state.media));

    useEffect(() => {
        prevMediaRef.current = media;
    });
    const prevMedia = prevMediaRef.current;

    const mediaArray = Object.values(media);

    useEffect(() => {
        if (prevMedia && prevMedia !== media) {
            setIsLoaded(true);
        }
    }, [media, prevMedia]);

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
