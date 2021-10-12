import AlbumSection from "./AlbumSection";

function AlbumsSection({ albums }) {
    return (
        <div className="albums-section">
            <h2>Albums</h2>
            {albums.map(album => {
                return <AlbumSection album={album} key={album.id}></AlbumSection>
            })}
        </div>
    )
}

export default AlbumsSection;
