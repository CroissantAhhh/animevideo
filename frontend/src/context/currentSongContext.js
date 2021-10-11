import { createContext, useContext, useState } from 'react';

export const CurrentSongContext = createContext();

export const useCurrentSong = () => useContext(CurrentSongContext);

export default function CurrentSongProvider({ children }) {
    const [currentSong, setCurrentSong] = useState({
        fileURL: "",
        imageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633904027/f191a4786289ade562884722ef784cff_byy82e.jpg",
        name: "",
        media: "",
        artist: "",
        album: ""
    });



    return (
        <CurrentSongContext.Provider
            value={{currentSong, setCurrentSong}}>
                {children}
        </CurrentSongContext.Provider>
    );
}
