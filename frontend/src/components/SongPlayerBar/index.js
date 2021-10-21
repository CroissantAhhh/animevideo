import { useState, useEffect, useRef } from "react";
import { useCurrentSongs } from "../../context/currentSongsContext";
import AudioPlayer from "react-h5-audio-player";
import "./SongPlayerBar.css";


function SongPlayerBar() {
    const { currentSongs, setCurrentSongs } = useCurrentSongs();
    const [foundSongs, setFoundSongs] = useState(false);
    const currentSongRef = useRef();

    useEffect(() => {
        if (currentSongs) {
            setFoundSongs(true)
        }
    }, [currentSongs]);

    function next() {
        setCurrentSongs({songList: currentSongs?.songList, currentPosition: currentSongs?.currentPosition + 1});
    }

    function previous() {
        setCurrentSongs({songList: currentSongs?.songList, currentPosition: currentSongs?.currentPosition - 1});
    }
    console.log(currentSongs?.songList[currentSongs?.currentPosition]);

    return (
        <div className="song-player-bar-container">
            {foundSongs &&
                <div className="song-player-bar">
                    <div className="song-info">
                        <img src={currentSongs?.songList[currentSongs?.currentPosition].trackImageURL ? currentSongs?.songList[currentSongs?.currentPosition]?.trackImageURL : "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633904027/f191a4786289ade562884722ef784cff_byy82e.jpg"} alt="track artwork" height="100px" width="100px"></img>
                        <div className="song-text-info">
                            <h2 className="song-text-track">{currentSongs?.songList[currentSongs?.currentPosition]?.name}</h2>
                            <h2 className="song-text-media">{currentSongs?.songList[currentSongs?.currentPosition]?.medium?.name}</h2>
                        </div>
                    </div>
                    <AudioPlayer
                    autoPlay
                    src={currentSongs?.songList[currentSongs?.currentPosition]?.fileURL}
                    showSkipControls={true}
                    onClickPrevious={previous}
                    onClickNext={next}></AudioPlayer>
                    <div className="song-player-bar-padding"></div>
                </div>
            }
        </div>
    );
};

export default SongPlayerBar;
