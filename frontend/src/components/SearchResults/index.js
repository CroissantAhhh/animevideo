import MediaResults from "./MediaResults";
import AlbumResults from "./AlbumResults";
import TrackResults from "./TrackResults";
import { useSelector } from "react-redux";
import "./SearchResults.css";

function SearchResults() {
    const queryString = useSelector(state => state.search.search);

    return (
        <div className="search-results">
            <div className="search-results-title">
                <h2>Search Results For: {queryString}</h2>
            </div>
            <MediaResults query={queryString}></MediaResults>
            <AlbumResults query={queryString}></AlbumResults>
            <TrackResults query={queryString}></TrackResults>
        </div>
    )
}

export default SearchResults;
