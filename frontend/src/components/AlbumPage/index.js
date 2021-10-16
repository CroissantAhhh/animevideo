import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { loadTargetAlbum } from "../../store/albums";
import { loadTracksByAlbum } from "../../store/tracks"
import TracksSection from "./TracksSection";
import TrackUploadModal from "../UploadModals/TrackUploadModal";
import "./AlbumPage.css";

function AlbumPage() {
    const dispatch = useDispatch();
    const { mediumName, albumName } = useParams();

    useEffect(() => {
        dispatch(loadTargetAlbum(mediumName, albumName));
    }, [dispatch, mediumName, albumName]);

    const targetAlbum = useSelector(state => Object.values(state.albums))[0];

    useEffect(() => {
        dispatch(loadTracksByAlbum(targetAlbum?.id));
    }, [dispatch, targetAlbum?.id]);

    const tracks = useSelector(state => Object.values(state.tracks));

    return (
        <div className="album-page">
            <div className="album-details">
                <div className="album-text-details">
                    <h1>{targetAlbum?.name}</h1>
                    <h2>{targetAlbum?.artist}</h2>
                    <Link to={`/${mediumName}`}>{targetAlbum?.medium.name}</Link>
                </div>
                <img className="album-image-details" src={targetAlbum?.albumImageURL} height="260px" width="260px" alt="album artwork" />
            </div>
            <TrackUploadModal className="upload-track-button" album={targetAlbum}></TrackUploadModal>
            <TracksSection tracks={tracks}></TracksSection>
        </div>
    )
}

export default AlbumPage;
