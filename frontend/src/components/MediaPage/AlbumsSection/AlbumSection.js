import { Link } from "react-router-dom";

function AlbumSection({ album }) {
    return (
        <div className="album-section">
            <div className="album-text-section">
                <Link to={`/albums/${album.id}`}>{album.name}</Link>
                <h3>{album.artist}</h3>
            </div>
            <img src={album.albumImageURL} height="140px" width="140px" alt="album artwork"></img>
        </div>
    )
}

export default AlbumSection;
