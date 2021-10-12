
function AlbumSection({ album }) {
    return (
        <div className="album-section">
            <h3>{album.name}</h3>
            <img src={album.albumImageURL} height="200px" width="200px" alt="album artwork"></img>
            <h3>{album.artist}</h3>
        </div>
    )
}

export default AlbumSection;
