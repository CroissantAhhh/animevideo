const LOAD = 'albums/LOAD';

const load = list => ({
    type: LOAD,
    list,
});

export const loadAlbums = () => async dispatch => {
    const response = await fetch('/api/albums');

    if (response.ok) {
        const albums = await response.json();
        dispatch(load(albums["albums"]));
    };
};

export const searchAlbums = (query) => async dispatch => {
    const response = await fetch(`/api/albums/${query}`);
    if (response.ok) {
        const albums = await response.json();
        dispatch(load(albums["albums"]));
    };
}

const albumsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            const albums = {};
            for (let album of action.list) {
                albums[album.id] = album;
            };
            return albums;
        default:
            return state;
    };
};

export default albumsReducer;
