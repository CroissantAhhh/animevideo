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
                <Route path="/media">
                    <MediaUploadPage></MediaUploadPage>
                </Route>
                <Route path="/album">
                    <AlbumUploadPage></AlbumUploadPage>
                </Route>
                <Route path="/track">
                    <TrackUploadPage></TrackUploadPage>
                </Route>
            </Switch>
        </div>
    )
};

export default UploadPage;
