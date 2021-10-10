const LOAD = 'tracks/LOAD';

const load = list => ({
    type: LOAD,
    list,
});

export const loadTracks = () => async dispatch => {
    const response = await fetch('/api/tracks');

    if (response.ok) {
        const tracks = await response.json();
        dispatch(load(tracks["tracks"]));
    };
};

const tracksReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            const tracks = {};
            for (let track of action.list) {
                tracks[track.id] = track;
            };
            return tracks;
        default:
            return state;
    };
};

export default tracksReducer;
