import MediaResults from "./MediaResults";
import AlbumResults from "./AlbumResults";
import TrackResults from "./TrackResults";

function SearchResults() {

    const queryString = window.location.search;
    const searchString = queryString.split("?query=")[1];
    return (
        <div className="search-results">
            <p>Search Results For: {searchString}</p>
            <MediaResults query={searchString}></MediaResults>
            <AlbumResults query={searchString}></AlbumResults>
            <TrackResults query={searchString}></TrackResults>
        </div>
    )
}

export default SearchResults;
