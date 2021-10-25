import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { loadTargetAlbum } from "../../store/albums";
import { loadTracksByAlbum } from "../../store/tracks"
import TracksSection from "./TracksSection";
import TrackUploadModal from "../UploadModals/TrackUploadModal";
import "./AlbumPage.css";

function AlbumPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [albumFound, setAlbumFound] = useState(false);
    const [tracksFound, setTracksFound] = useState(false);
    const dispatch = useDispatch();
    const { albumId } = useParams();

    useEffect(() => {
        dispatch(loadTargetAlbum(albumId)).then(() => setAlbumFound(true));
    }, [dispatch, albumId]);

    const targetAlbum = useSelector(state => Object.values(state.albums))[0];

    useEffect(() => {
        document.title = targetAlbum?.name;
        window.scrollTo(0, 0);
    },[targetAlbum?.name]);

    useEffect(() => {
        dispatch(loadTracksByAlbum(albumId)).then(() => setTracksFound(true));
    }, [dispatch, albumId]);

    const tracks = useSelector(state => Object.values(state.tracks));

    useEffect(() => {
        if (albumFound && tracksFound) {
            setIsLoaded(true);
        }
    }, [albumFound, tracksFound]);

    return (
        <div className="album-page-container">
            {isLoaded &&
                <div className="album-page">
                    <div className="album-details">
                        <div className="album-text-details">
                            <h1>{targetAlbum?.name}</h1>
                            <h2>{targetAlbum?.artist}</h2>
                            <Link to={`/media/${targetAlbum?.medium?.id}`}>{targetAlbum?.medium?.name}</Link>
                        </div>
                        <img className="album-image-details" src={targetAlbum?.albumImageURL} height="260px" width="260px" alt="album artwork" />
                    </div>
                    <TrackUploadModal className="upload-track-button" album={targetAlbum}></TrackUploadModal>
                    <TracksSection tracks={tracks}></TracksSection>
                </div>
            }
        </div>
    )
}

export default AlbumPage;
