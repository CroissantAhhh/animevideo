import { createContext, useContext, useState } from 'react';

export const CurrentSongsContext = createContext();

export const useCurrentSongs = () => useContext(CurrentSongsContext);

export default function CurrentSongsProvider({ children }) {
    const [currentSongs, setCurrentSongs] = useState({ songList: [], currentPosition: 0});

    return (
        <CurrentSongsContext.Provider
            value={{currentSongs, setCurrentSongs}}>
                {children}
        </CurrentSongsContext.Provider>
    );
}
