import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { loadTargetAlbum } from "../../store/albums";
import { loadTracksByAlbum } from "../../store/tracks"
import TracksSection from "./TracksSection";

function AlbumPage() {
    const dispatch = useDispatch();
    const { mediumName, albumName } = useParams();
    console.log(mediumName, albumName)

    useEffect(() => {
        dispatch(loadTargetAlbum(mediumName, albumName));
    }, [dispatch, mediumName, albumName]);

    const targetAlbum = useSelector(state => Object.values(state.albums))[0];
    console.log(targetAlbum);

    useEffect(() => {
        dispatch(loadTracksByAlbum(targetAlbum?.id));
    }, [dispatch, targetAlbum?.id]);

    const tracks = useSelector(state => Object.values(state.tracks));

    return (
        <div className="album-page">
            <h1>{targetAlbum?.name}</h1>
            <img src={targetAlbum?.albumImageURL} height="200px" width="200px" alt="album artwork" />
            <h2>{targetAlbum?.artist}</h2>
            <TracksSection tracks={tracks}></TracksSection>
        </div>
    )
}

export default AlbumPage;
