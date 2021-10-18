import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAlbum } from "../../../store/albums"
import { process } from "../../../utils/process";
import "./AlbumUploadModal.css";

function AlbumUploadPage({ medium }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [albumImageURL, setAlbumImageURL] = useState("");
    const [artist, setArtist] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    function checkImageURL(url) {
        return(url.match(/\.(jpeg|jpg|png)$/) != null);
    };

    const validate = () => {
        const errors = [];
        if (!name) errors.push('Please provide a name');
        if (!albumImageURL) errors.push('Please provide an album image');
        if (!checkImageURL(albumImageURL)) errors.push('Please provide a valid album image URL');
        if (!artist) errors.push('Please provide an artist');
        return errors;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();

        if (errors.length > 0) return setValidationErrors(errors);

        const payload = {
            name,
            albumImageURL,
            artist,
            mediumId: medium.id,
        }

        const newAlbum = await dispatch(addAlbum(payload));
        history.push(`/${process(medium.name)}/albums/${process(newAlbum.name)}`);
    };

    return (
        <div className="album-upload">
            <form className="album-upload-form" onSubmit={onSubmit}>
            <h2>Album Upload Page</h2>
                {validationErrors.length > 0 && (
                    <div>
                        The following errors were found:
                        <ul style={{display: validationErrors.length ? "inline-block" : "none"}}>
                            {validationErrors.map(error => <li key={error}>{error}</li>)}
                        </ul>
                    </div>
                )}
                <label htmlFor='album-name'>Album Name:</label>
                <input id='album-name' type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor='album-albumImageURL'>Album Image:</label>
                <input id='album-albumImageURL' type="text" value={albumImageURL} onChange={(e) => setAlbumImageURL(e.target.value)}></input>
                <label htmlFor='album-artist'>Album Artist:</label>
                <input id='album-artist' type="text" value={artist} onChange={(e) => setArtist(e.target.value)}></input>
                <button className="album-upload-button" type="submit">Add Media</button>
            </form>
        </div>
    )
}

export default AlbumUploadPage;
