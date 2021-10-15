import MediaResults from "./MediaResults";
import AlbumResults from "./AlbumResults";
import TrackResults from "./TrackResults";
import { useSelector } from "react-redux";

function SearchResults() {
    const queryString = useSelector(state => state.search.search);

    return (
        <div className="search-results">
            <p>Search Results For: {queryString}</p>
            <MediaResults query={queryString}></MediaResults>
            <AlbumResults query={queryString}></AlbumResults>
            <TrackResults query={queryString}></TrackResults>
        </div>
    )
}

export default SearchResults;
