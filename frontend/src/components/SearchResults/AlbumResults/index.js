import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchAlbums } from "../../../store/albums";
import AlbumResult from "./AlbumResult";

function AlbumResults({ query }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [albumsFound, setAlbumsFound] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchAlbums(query)).then(() => setAlbumsFound(true));
    },[dispatch, query]);

    const albums = useSelector(state => Object.values(state.albums));

    const albumsArray = Object.values(albums);

    useEffect(() => {
        if (albumsFound) {
            setIsLoaded(true);
        }
    }, [albumsFound]);

    return (
        <div className="albums-results-container">
            {isLoaded &&
                <div className="albums-results">
                    <div className="album-results-title">
                        <h2 className="album-results-header">Albums:</h2>
                    </div>
                    <div className="album-results-content">
                        {albumsArray.length > 0 && albumsArray.map(album => {
                            return <AlbumResult album={album} key={album.id}></AlbumResult>
                        })}
                        {albumsArray.length === 0 &&
                            <h3>No results found.</h3>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default AlbumResults;
