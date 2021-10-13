import { Link } from "react-router-dom";

function UploadPage() {
    return (
        <div className="upload-options">
            <Link to="/upload/media"></Link>
            <Link to="/upload/album"></Link>
            <Link to="/upload/track"></Link>
        </div>
    )
};

export default UploadPage;
