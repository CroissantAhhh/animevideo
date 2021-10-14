import { csrfFetch } from "./csrf";
const LOAD = 'tracks/LOAD';
const ADD_ONE = 'tracks/ADD_ONE'

const load = list => ({
    type: LOAD,
    list,
});

const addOne = track => ({
    type: ADD_ONE,
    track
});

export const loadTracks = () => async dispatch => {
    const response = await fetch('/api/tracks');

    if (response.ok) {
        const tracks = await response.json();
        dispatch(load(tracks["tracks"]));
    };
};

export const loadTrackById = (trackId) => async dispatch => {
    const response = await fetch(`/api/tracks/byId/${trackId}`);

    if (response.ok) {
        const track = await response.json();
        dispatch(load([track["track"]]));
    };
};

export const addTrack = (formData) => async dispatch => {
    const response  = await csrfFetch("/api/tracks", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        const newTrack = await response.json();
        dispatch(addOne(newTrack["track"]));
        return newTrack["track"];
    }
};

export const loadTracksByAlbum = (albumId) => async dispatch => {
    const response = await fetch(`/api/tracks/album/${albumId}`);

    if (response.ok) {
        const tracks = await response.json();
        dispatch(load(tracks["tracks"]));
    };
};


export const loadTargetTrack = (mediumName, trackName) => async dispatch => {
    const response = await fetch(`/api/tracks/search/${mediumName}/${trackName}`);

    if (response.ok) {
        const tracks = await response.json();
        dispatch(load(tracks["track"]));
    };
};

export const loadRandomTracks = () => async dispatch => {
    const response = await fetch('/api/tracks/random');

    if (response.ok) {
        const tracks = await response.json();
        dispatch(load(tracks["tracks"]));
    };
};

export const searchTracks = (query) => async dispatch => {
    const response = await fetch(`/api/tracks/${query}`);
    if (response.ok) {
        const tracks = await response.json();
        dispatch(load(tracks["tracks"]));
    };
}

const tracksReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            const tracks = {};
            for (let track of action.list) {
                tracks[track.id] = track;
            };
            return tracks;
        case ADD_ONE:
            return {...state, [action.track.id]: action.track}
        default:
            return state;
    };
};

export default tracksReducer;
