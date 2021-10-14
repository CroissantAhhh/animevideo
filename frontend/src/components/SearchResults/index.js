import MediaResults from "./MediaResults";
import AlbumResults from "./AlbumResults";
import TrackResults from "./TrackResults";
import { useEffect, useState } from 'react';

function SearchResults() {
    const queryString = window.location.search;
    const [searchString, setSearchString] = useState('');
    useEffect(() => {
        setSearchString(queryString.split("?query=")[1]);
    }, [queryString]);

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
