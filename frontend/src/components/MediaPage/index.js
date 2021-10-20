import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useState, useEffect, useRef } from "react";
import { loadTargetMedia } from "../../store/media";
import { loadAlbumsByMedia } from "../../store/albums";
import AlbumsSection from "./AlbumsSection";
import AlbumUploadModal from "../UploadModals/AlbumUploadModal";
import "./MediaPage.css";

function MediaPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const { mediumId } = useParams();
    const prevMediaRef = useRef();
    const prevAlbumsRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        dispatch(loadTargetMedia(mediumId));
    }, [dispatch, mediumId]);

    const targetMedia = useSelector(state => Object.values(state.media))[0];

    useEffect(() => {
        prevMediaRef.current = targetMedia;
    });
    const prevMedia = prevMediaRef.current;

    useEffect(() => {
        dispatch(loadAlbumsByMedia(targetMedia?.id));
    }, [dispatch, targetMedia?.id]);

    const albums = useSelector(state => Object.values(state.albums));

    useEffect(() => {
        prevAlbumsRef.current = albums;
    });
    const prevAlbums = prevAlbumsRef.current;

    useEffect(() => {
        if (prevMedia && prevAlbums && prevMedia !== targetMedia && prevAlbums !== albums) {
            setIsLoaded(true);
        }
    }, [targetMedia, albums, prevMedia, prevAlbums]);

    return (
        <div className="media-page-container">
            {isLoaded &&
                <div className="media-page">
                    <div className="media-title">
                            <h2>{targetMedia?.name}</h2>
                    </div>
                    <div className="media-details">
                        <div className="media-text-details">
                            <p>{targetMedia?.description}</p>
                            <a href={targetMedia?.infoLink}>Info Link</a>
                        </div>
                        <img className="media-banner" src={targetMedia?.bannerURL} height="400px" alt="media banner"/>
                    </div>
                    <AlbumUploadModal className="upload-album-button" medium={targetMedia}></AlbumUploadModal>
                    <AlbumsSection albums={albums}></AlbumsSection>
                </div>
            }
        </div>
    )
};

export default MediaPage;
