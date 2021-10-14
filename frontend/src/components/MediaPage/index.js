import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { loadTargetMedia } from "../../store/media";
import { loadAlbumsByMedia } from "../../store/albums";
import AlbumsSection from "./AlbumsSection";
import AlbumUploadModal from "../UploadModals/AlbumUploadModal";

function MediaPage() {
    const dispatch = useDispatch();
    const { mediumName } = useParams();

    useEffect(() => {
        dispatch(loadTargetMedia(mediumName));
    }, [dispatch, mediumName]);

    const targetMedia = useSelector(state => Object.values(state.media))[0];

    useEffect(() => {
        dispatch(loadAlbumsByMedia(targetMedia?.id));
    }, [dispatch, targetMedia?.id]);

    const albums = useSelector(state => Object.values(state.albums));

    return (
        <div className="media-page">
            <div className="media-details">
                <h2>{targetMedia?.name}</h2>
                <img src={targetMedia?.bannerURL} height="200px" width="200px" alt="media banner"/>
                <a href={targetMedia?.infoLink}>Info Link</a>
                <p>{targetMedia?.description}</p>
            </div>
            <AlbumUploadModal medium={targetMedia}></AlbumUploadModal>
            <AlbumsSection albums={albums}></AlbumsSection>
        </div>
    )
};

export default MediaPage;
