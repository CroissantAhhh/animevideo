import { Link, useParams } from "react-router-dom";
import { process } from "../../../utils/process";


function AlbumSection({ album }) {
    const { mediumName } = useParams();
    return (
        <div className="album-section">
            <Link to={`/${mediumName}/albums/${process(album.name)}`}>{album.name}</Link>
            <img src={album.albumImageURL} height="200px" width="200px" alt="album artwork"></img>
            <h3>{album.artist}</h3>
        </div>
    )
}

export default AlbumSection;
