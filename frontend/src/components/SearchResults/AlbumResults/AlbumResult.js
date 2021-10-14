import { Link } from 'react-router-dom';
import { process } from "../../../utils/process";

function AlbumResult({ album }) {
    return (
        <div className="album-result">
            <Link to={`/${process(album.medium.name)}/albums/${process(album.name)}`}>{album.name}</Link>
            <img src={album.albumImageURL} alt="album banner" height="100px" width="100px"></img>
            <p>{album.medium.name} - {album.artist}</p>
        </div>
    )
}

export default AlbumResult;
