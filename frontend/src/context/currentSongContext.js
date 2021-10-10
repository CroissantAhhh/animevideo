import { createContext, useContext, useState, useCallback } from 'react';

export const CurrentSongContext = createContext();

export const useCurrentSong = () => useContext(CurrentSongContext);

export default function CurrentSongProvider({ children }) {

    return (
        <AppContext.Provider
            value={{

            }}>
                {children}
        </AppContext.Provider>
    )
}
