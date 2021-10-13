import { Link, Switch, Route } from "react-router-dom";
import MediaUploadPage from "./MediaUploadPage";
import AlbumUploadPage from "./AlbumUploadPage";
import TrackUploadPage from "./TrackUploadPage";

function UploadPage() {
    return (
        <div className="upload-options">
            <Link to="/upload/media"></Link>
            <Link to="/upload/album"></Link>
            <Link to="/upload/track"></Link>
            <Switch>
                <Route path="/upload/media">
                    <MediaUploadPage></MediaUploadPage>
                </Route>
                <Route path="/upload/album">
                    <AlbumUploadPage></AlbumUploadPage>
                </Route>
                <Route path="/upload/track">
                    <TrackUploadPage></TrackUploadPage>
                </Route>
            </Switch>
        </div>
    )
};

export default UploadPage;
