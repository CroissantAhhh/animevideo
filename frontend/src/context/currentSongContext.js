import { createContext, useContext, useState, useCallback } from 'react';

export const CurrentSongContext = createContext();

export const useCurrentSong = () => useContext(CurrentSongContext);

export default function CurrentSongProvider({ children }) {
    const [currentSong, setCurrentSong] = useState("");

    return (
        <CurrentSongContext.Provider
            value={{currentSong, setCurrentSong}}>
                {children}
        </CurrentSongContext.Provider>
    );
}
