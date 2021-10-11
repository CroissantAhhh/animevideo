import { Link } from 'react-router-dom';

function AlbumResult({ album }) {
    return (
        <div className="album-result">
            <Link to={`/`}>{album.name}</Link>
            <img src={album.albumImageURL} alt="album banner" height="100px" width="100px"></img>
            <p>{album.medium.name} - {album.artist}</p>
        </div>
    )
}

export default AlbumResult;
