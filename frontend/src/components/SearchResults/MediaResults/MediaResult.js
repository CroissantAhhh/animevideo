import { Link } from 'react-router-dom';
import { process } from "../../../utils/process";
import "./MediaResult.css";

function MediaResult({ medium }) {
    return (
        <div className="media-result-container">
            <Link to={`/${process(medium.name)}`}>{medium.name}</Link>
            <img src={medium.bannerURL} alt="media banner" height="140px" width="140px"></img>
        </div>
    )
}

export default MediaResult;
