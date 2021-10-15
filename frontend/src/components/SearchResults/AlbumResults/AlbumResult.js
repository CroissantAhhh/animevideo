import { Link } from 'react-router-dom';
import { process } from "../../../utils/process";
import "./AlbumResult.css"

function AlbumResult({ album }) {
    return (
        <div className="album-result-container">
            <Link to={`/${process(album.medium.name)}/albums/${process(album.name)}`}>{album.name}</Link>
            <img src={album.albumImageURL} alt="album banner" height="140px" width="140px"></img>
        </div>
    )
}

export default AlbumResult;
