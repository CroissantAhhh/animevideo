import { createContext, useCallback, useContext, useState } from 'react';

export const CurrentSongsContext = createContext();

export const useCurrentSongs = () => useContext(CurrentSongsContext);

export default function CurrentSongsProvider({ children }) {
    const [currentSongs, setCurrentSongs] = useState({ songList: [], playOrder: [], currentPosition: 0});

    const injectSongs = useCallback(
        (tracks, position) => {
            setCurrentSongs({
                songList: tracks,
                playOrder: tracks.keys(),
                currentPosition: position
            })
        },
        [setCurrentSongs]
    );

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    return (
        <CurrentSongsContext.Provider
            value={{currentSongs, setCurrentSongs, injectSongs}}>
                {children}
        </CurrentSongsContext.Provider>
    );
}
