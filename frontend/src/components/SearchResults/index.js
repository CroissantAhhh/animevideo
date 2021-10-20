import MediaResults from "./MediaResults";
import AlbumResults from "./AlbumResults";
import TrackResults from "./TrackResults";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./SearchResults.css";

function SearchResults() {
    const [isLoaded, setIsLoaded] = useState(false);
    const queryString = useSelector(state => state.search.search);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        if (queryString) {
            setIsLoaded(true);
        }
    }, [queryString]);

    return (
        <div className="search-results-container">
            {isLoaded &&
                <div className="search-results">
                    <div className="search-results-title">
                        <h2>Search Results For: {queryString}</h2>
                    </div>
                    <MediaResults query={queryString}></MediaResults>
                    <AlbumResults query={queryString}></AlbumResults>
                    <TrackResults query={queryString}></TrackResults>
                </div>
            }
        </div>
    )
}

export default SearchResults;
