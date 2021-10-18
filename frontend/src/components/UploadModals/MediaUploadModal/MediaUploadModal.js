import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMedia } from "../../../store/media"
import { process } from "../../../utils/process";
import "./MediaUploadModal.css";

function MediaUploadPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [bannerURL, setBannerURL] = useState("");
    const [infoLink, setInfoLink] = useState("");
    const [description, setDescription] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    function checkImageURL(url) {
        return(url.match(/\.(jpeg|jpg|png)$/) != null);
    };

    const validate = () => {
        const errors = [];
        if (!name) errors.push('Please provide a name');
        if (!bannerURL) errors.push('Please provide a banner image');
        if (!checkImageURL(bannerURL)) errors.push('Please provide a valid banner image URL');
        if (!infoLink) errors.push('Please provide an info link');
        if (!description) errors.push('Please provide a description');
        return errors;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();

        if (errors.length > 0) return setValidationErrors(errors);

        const payload = {
            name,
            bannerURL,
            infoLink,
            description,
        }

        const newMedia = await dispatch(addMedia(payload));
        history.push(`/${process(newMedia.name)}`)
    };

    return (
        <div className="media-upload">
            <form className="media-upload-form" onSubmit={onSubmit}>
            <h2>Media Upload Page</h2>
                {validationErrors.length > 0 && (
                    <div>
                        The following errors were found:
                        <ul style={{display: validationErrors.length ? "inline-block" : "none"}}>
                            {validationErrors.map(error => <li key={error}>{error}</li>)}
                        </ul>
                    </div>
                )}
                <label htmlFor='media-name'>Media Name:</label>
                <input id='media-name' type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor='media-bannerURL'>Media Banner Image:</label>
                <input id='media-bannerURL' type="text" value={bannerURL} onChange={(e) => setBannerURL(e.target.value)}></input>
                <label htmlFor='media-infoLink'>Media Info Link:</label>
                <input id='media-infoLink' type="text" value={infoLink} onChange={(e) => setInfoLink(e.target.value)}></input>
                <label htmlFor='media-description'>Media Description:</label>
                <textarea id='media-description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button className="media-upload-button" type="submit">Add Media</button>
            </form>
        </div>
    )
}

export default MediaUploadPage;
