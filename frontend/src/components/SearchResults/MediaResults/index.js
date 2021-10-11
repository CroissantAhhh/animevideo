import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMedia } from "../../../store/media";
import MediaResult from "./MediaResult";

function MediaResults({ query }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchMedia(query));
    },[dispatch]);
    const media = useSelector(state => Object.values(state.media));
    const mediaArray = Object.values(media);

    return (
        <div className="media-results">
            <h2>Media</h2>
            {mediaArray.map(medium => {
                <MediaResult medium={medium}></MediaResult>
            })}
        </div>
    )
}

export default MediaResults;
