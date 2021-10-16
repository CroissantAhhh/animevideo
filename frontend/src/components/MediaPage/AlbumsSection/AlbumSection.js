import { Link, useParams } from "react-router-dom";
import { process } from "../../../utils/process";


function AlbumSection({ album }) {
    const { mediumName } = useParams();
    return (
        <div className="album-section">
            <div className="album-text-section">
                <Link to={`/${mediumName}/albums/${process(album.name)}`}>{album.name}</Link>
                <h3>{album.artist}</h3>
            </div>
            <img src={album.albumImageURL} height="140px" width="140px" alt="album artwork"></img>
        </div>
    )
}

export default AlbumSection;
