import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { retainSession } from "./store/session";
import Navigation from "./components/Navigation";
import TrackList from "./components/TrackList";
import SearchResults from "./components/SearchResults";
import CurrentSongProvider from "./context/currentSongContext";
import SongPlayerBar from "./components/SongPlayerBar";
import TrackPage from "./components/TrackPage";
import MediaPage from "./components/MediaPage";
import AlbumPage from "./components/AlbumPage";
import MediaUploadPage from "./components/UploadModal/MediaUploadPage";
import AlbumUploadPage from "./components/UploadModal/AlbumUploadPage";
import TrackUploadPage from "./components/UploadModal/TrackUploadPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(retainSession()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <CurrentSongProvider>
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <TrackList></TrackList>
            </Route>
            <Route path="/search">
              <SearchResults></SearchResults>
            </Route>
            <Route exact path="/upload/media">
              <MediaUploadPage></MediaUploadPage>
            </Route>
            <Route exact path="/upload/album">
              <AlbumUploadPage></AlbumUploadPage>
            </Route>
            <Route exact path="/upload/track">
              <TrackUploadPage></TrackUploadPage>
            </Route>
            <Route exact path="/:mediumName">
              <MediaPage></MediaPage>
            </Route>
            <Route path="/:mediumName/albums/:albumName">
              <AlbumPage></AlbumPage>
            </Route>
            <Route path="/:mediumName/tracks/:trackName">
              <TrackPage></TrackPage>
            </Route>
          </Switch>
        )}
        <SongPlayerBar></SongPlayerBar>
      </CurrentSongProvider>
    </>
  );
}

export default App;
