import { useEffect, useState } from "react";
import { useCurrentSongs } from "../../context/currentSongsContext";
import AudioPlayer from "react-h5-audio-player";
import "./SongPlayerBar.css";


function SongPlayerBar() {
    const { currentSongs, setCurrentSongs } = useCurrentSongs();
    const [isShuffle, setIsShuffle] = useState(false);
    const [isLoop, setIsLoop] = useState(false);

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

    useEffect(() => {
        if (isShuffle) {
            const startingPosition = currentSongs?.currentPosition;
            const remainingSongs = currentSongs?.songList?.map((element, index) => index).filter(index => index !== startingPosition);
            const shuffledOrder = [startingPosition, ...shuffle(remainingSongs)];
            setCurrentSongs({ ...currentSongs, playOrder: shuffledOrder, currentPosition: 0 })
        } else {
            const currentSongPosition = currentSongs?.playOrder[currentSongs?.currentPosition];
            setCurrentSongs({ ...currentSongs, playOrder: currentSongs?.songList.map((element, index) => index), currentPosition: currentSongPosition})
        }
    }, [isShuffle])

    function toggleLoop() {
        setIsLoop(!isLoop);

    }

    function next() {
        if (currentSongs?.currentPosition < currentSongs?.songList?.length) {
            if (currentSongs?.currentPosition === currentSongs?.songList?.length - 1 && isLoop) {
                setCurrentSongs({ ...currentSongs, currentPosition: 0 });
            } else {
                setCurrentSongs({ ...currentSongs, currentPosition: currentSongs?.currentPosition + 1});
            }
        }
    }

    function previous() {
        if (currentSongs?.currentPosition >= 0) {
            setCurrentSongs({ ...currentSongs, currentPosition: currentSongs?.currentPosition - 1});
        }
    }

    return (
        <div className="song-player-bar-container">
            <div className="song-player-bar">
                <div className="song-info">
                    <img src={currentSongs?.songList[currentSongs?.playOrder[currentSongs?.currentPosition]]?.trackImageURL ? currentSongs?.songList[currentSongs?.playOrder[currentSongs?.currentPosition]]?.trackImageURL : "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633904027/f191a4786289ade562884722ef784cff_byy82e.jpg"} alt="track artwork" height="100px" width="100px"></img>
                    <div className="song-text-info">
                        <h2 className="song-text-track">{currentSongs?.songList[currentSongs?.playOrder[currentSongs?.currentPosition]]?.name}</h2>
                        <h2 className="song-text-media">{currentSongs?.songList[currentSongs?.playOrder[currentSongs?.currentPosition]]?.medium?.name}</h2>
                    </div>
                </div>
                <AudioPlayer
                autoPlay
                src={currentSongs?.currentPosition >= 0 && currentSongs?.currentPosition < currentSongs?.songList?.length ? currentSongs?.songList[currentSongs?.playOrder[currentSongs?.currentPosition]]?.fileURL : "" }
                showSkipControls={true}
                onClickPrevious={previous}
                onClickNext={next}
                onEnded={next}
                progressUpdateInterval={1}
                customAdditionalControls={
                    [
                        <button className="loop-toggle" type="button" onClick={toggleLoop} style={isLoop ? {color: "rgb(1, 166, 196)"} : {color: "white"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" focusable={false} width="1em" height="1em" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" style={{transform: "rotate(360deg)"}}><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" fill="currentColor" /></svg>
                        </button>,
                        <button
                        className="shuffle-toggle"
                        type="button"
                        value={isShuffle}
                        onClick={() => setIsShuffle(isShuffle => !isShuffle)}
                        style={isShuffle ? {color: "rgb(1, 166, 196)"} : {color: "white"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" focusable={false} width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" style={{transform: "rotate(360deg)"}}><path d="M15.093 6.694h.92v2.862L20 5.532l-3.988-4.025v2.387h-.92c-3.694 0-5.776 2.738-7.614 5.152c-1.652 2.172-3.08 4.049-5.386 4.049H0v2.799h2.093c3.694 0 5.776-2.736 7.614-5.152c1.652-2.173 3.08-4.048 5.386-4.048zM5.41 8.458c.158-.203.316-.412.477-.623a47.33 47.33 0 0 1 1.252-1.596C5.817 5.005 4.224 4.095 2.093 4.095H0v2.799h2.093c1.327 0 2.362.623 3.317 1.564zm10.602 4.836h-.92c-1.407 0-2.487-.701-3.491-1.738l-.303.397c-.441.58-.915 1.201-1.439 1.818c1.356 1.324 3 2.324 5.232 2.324h.92v2.398L20 14.468l-3.988-4.025v2.851z" fill="currentColor"/></svg>
                        </button>
                    ]
                }></AudioPlayer>
                <div className="song-player-bar-padding"></div>
            </div>
        </div>
    );
};

export default SongPlayerBar;
