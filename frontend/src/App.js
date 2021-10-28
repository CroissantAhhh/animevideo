import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { retainSession } from "./store/session";
import { loadUserPlaylists } from "./store/playlist";
import Navigation from "./components/Navigation";
import TrackList from "./components/TrackList";
import SearchResults from "./components/SearchResults";
import CurrentSongsProvider from "./context/currentSongsContext";
import SongPlayerBar from "./components/SongPlayerBar";
import TrackPage from "./components/TrackPage";
import MediaPage from "./components/MediaPage";
import AlbumPage from "./components/AlbumPage";
import PlaylistPage from "./components/PlaylistPage";
import PlaylistBar from "./components/PlaylistBar";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(retainSession()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <PlaylistBar></PlaylistBar>
      <CurrentSongsProvider>
        <div className="main-page-content">
          {isLoaded && (
            <Switch>
              <Route exact path="/">
                <TrackList></TrackList>
              </Route>
              <Route path="/search">
                <SearchResults></SearchResults>
              </Route>
              <Route path="/media/:mediumId">
                <MediaPage></MediaPage>
              </Route>
              <Route path="/albums/:albumId">
                <AlbumPage></AlbumPage>
              </Route>
              <Route path="/playlists/:playlistId">
                <PlaylistPage></PlaylistPage>
              </Route>
              <Route path="/tracks/:trackId">
                <TrackPage></TrackPage>
              </Route>
            </Switch>
          )}
        </div>
        <SongPlayerBar></SongPlayerBar>
      </CurrentSongsProvider>
    </>
  );
}

export default App;
