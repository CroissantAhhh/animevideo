import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { loadTargetAlbum } from "../../store/albums";
import { loadTracksByAlbum } from "../../store/tracks"
import TracksSection from "./TracksSection";
import TrackUploadModal from "../UploadModals/TrackUploadModal";

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
                <h1>{targetAlbum?.name}</h1>
                <img src={targetAlbum?.albumImageURL} height="200px" width="200px" alt="album artwork" />
                <Link to={`/${mediumName}`}></Link>
                <h2>{targetAlbum?.artist}</h2>
            </div>
            <TrackUploadModal album={targetAlbum}></TrackUploadModal>
            <TracksSection tracks={tracks}></TracksSection>
        </div>
    )
}

export default AlbumPage;
