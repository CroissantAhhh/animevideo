import { createContext, useCallback, useContext, useState } from 'react';

export const CurrentSongsContext = createContext();

export const useCurrentSongs = () => useContext(CurrentSongsContext);

export default function CurrentSongsProvider({ children }) {
    const [currentSongs, setCurrentSongs] = useState({ songList: [], currentPosition: 0});

    const injectSongs = useCallback(
        (tracks, position) => {
            setCurrentSongs({
                songList: tracks,
                currentPosition: position
            })
        },
        [setCurrentSongs]
    );

    return (
        <CurrentSongsContext.Provider
            value={{currentSongs, setCurrentSongs, injectSongs}}>
                {children}
        </CurrentSongsContext.Provider>
    );
}