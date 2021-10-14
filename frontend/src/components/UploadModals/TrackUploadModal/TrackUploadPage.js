import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTrack } from "../../../store/tracks"
import { process } from "../../../utils/process";

function TrackUploadPage({ album }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [fileURL, setFileURL] = useState("");
    const [name, setName] = useState("");
    const [trackImageURL, setTrackImageURL] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    function checkImageURL(url) {
        return(url.match(/\.(jpeg|jpg|png)$/) != null);
    };

    function checkFileURL(url) {
        return(url.match(/\.(mp3)$/) != null);
    };

    const validate = () => {
        const errors = [];
        if (!name) errors.push('Please provide a name');
        if (!fileURL) errors.push('Please provide an file URL');
        if (!checkFileURL(fileURL)) errors.push('Please provide a valid file URL');
        if (!trackImageURL) errors.push('Please provide a track image URL');
        if (!checkImageURL(trackImageURL)) errors.push('Please provide a valid track image URL');
        return errors;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();

        if (errors.length > 0) return setValidationErrors(errors);

        const payload = {
            fileURL,
            name,
            userId: sessionUser?.id,
            albumId: album.id,
            mediumId: album.medium.id,
            trackImageURL
        }

        const newTrack = await dispatch(addTrack(payload));
        history.push(`/${process(newTrack.medium.name)}/tracks/${process(newTrack.name)}`);
    };

    return (
        <div className="track-upload">
            <h2>Track Upload Page</h2>
            <form className="track-upload-form" onSubmit={onSubmit}>
                {validationErrors.length > 0 && (
                    <div>
                        The following errors were found:
                        <ul>
                            {validationErrors.map(error => <li key={error}>{error}</li>)}
                        </ul>
                    </div>
                )}
                <label htmlFor='track-name'>Track Name:</label>
                <input id='track-name' type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor='track-fileURL'>Track URL (MP3):</label>
                <input id='track-fileURL' type="text" value={fileURL} onChange={(e) => setFileURL(e.target.value)}></input>
                <label htmlFor='track-imageURL'>Track Image URL (jpeg/jpg/png):</label>
                <input id='track-imageURL' type="text" value={trackImageURL} onChange={(e) => setTrackImageURL(e.target.value)}></input>
                <button className="album-upload-button" type="submit">Add Track</button>
            </form>
        </div>
    )
}

export default TrackUploadPage;
