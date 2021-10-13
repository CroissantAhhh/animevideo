import { Link, Switch, Route } from "react-router-dom";
import MediaUploadPage from "./MediaUploadPage";
import AlbumUploadPage from "./AlbumUploadPage";
import TrackUploadPage from "./TrackUploadPage";

function UploadPage() {
    return (
        <div className="upload-options">
            <p><Link to="/upload/media">Media Upload</Link></p>
            <p><Link to="/upload/album">Album Upload</Link></p>
            <p><Link to="/upload/track">Track Upload</Link></p>
            <Switch>
                <Route exact path="/upload/media">
                    <MediaUploadPage></MediaUploadPage>
                </Route>
                <Route exact path="/upload/album">
                    <AlbumUploadPage></AlbumUploadPage>
                </Route>
                <Route exact path="/upload/track">
                    <TrackUploadPage></TrackUploadPage>
                </Route>
            </Switch>
        </div>
    )
};

export default UploadPage;
