import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchAlbums } from "../../../store/albums";
import AlbumResult from "./AlbumResult";

function AlbumResults({ query }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchAlbums(query));
    },[dispatch, query]);
    const albums = useSelector(state => Object.values(state.albums));
    const albumsArray = Object.values(albums);

    return (
        <div className="albums-results">
            <h2>Albums</h2>
            {albumsArray.map(album => {
                return <AlbumResult album={album} key={album.id}></AlbumResult>
            })}
        </div>
    )
}

export default AlbumResults;
