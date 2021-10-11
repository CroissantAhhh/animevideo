import { Link } from 'react-router-dom';

function MediaResult({ medium }) {
    return (
        <div className="media-result">
            <Link to={`/`}>{medium.name}</Link>
            <img src={medium.bannerURL} alt="media banner" height="100px" width="100px"></img>
        </div>
    )
}

export default MediaResult;