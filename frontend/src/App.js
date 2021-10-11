import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { retainSession } from "./store/session";
import Navigation from "./components/Navigation";
import TrackList from "./components/TrackList";
import SearchResults from "./components/SearchResults";
import CurrentSongProvider from "./context/currentSongContext";
import SongPlayerBar from "./components/SongPlayerBar";

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
            <Route path="/media">

            </Route>
            <Route path="/search">
              <SearchResults></SearchResults>
            </Route>
          </Switch>

        )}
        <SongPlayerBar></SongPlayerBar>
      </CurrentSongProvider>
    </>
  );
}

export default App;
