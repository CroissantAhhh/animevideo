import MediaResults from "./MediaResults";

function SearchResults() {

    const queryString = window.location.search;
    const searchString = queryString.split("?query=")[1];
    return (
        <div className="search-results">
            <p>Search Results For: {searchString}</p>
            <MediaResults query={searchString}></MediaResults>
        </div>
    )
}

export default SearchResults;
