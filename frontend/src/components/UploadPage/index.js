import { Link, Switch, Route } from "react-router-dom";

function UploadPage() {
    return (
        <div className="upload-options">
            <Link to="/upload/media"></Link>
            <Link to="/upload/album"></Link>
            <Link to="/upload/track"></Link>
            <Switch>
                <Route path="/upload/media">

                </Route>
                <Route path="/upload/album">

                </Route>
                <Route path="/upload/track">

                </Route>
            </Switch>
        </div>
    )
};

export default UploadPage;
