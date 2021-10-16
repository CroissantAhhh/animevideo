import AlbumSection from "./AlbumSection";

function AlbumsSection({ albums }) {
    return (
        <div className="albums-section">
            <div className="albums-section-title">
                <h2>Albums</h2>
            </div>
            <div className="albums-listing">
                {albums.map(album => {
                    return <AlbumSection album={album} key={album.id}></AlbumSection>
                })}
            </div>
        </div>
    )
}

export default AlbumsSection;
