import { csrfFetch } from "./csrf";

const LOAD = 'playlists/LOAD';
const LOAD_OTHER = 'playlists/LOAD_OTHER';
const ADD = 'playlists/ADD';

const load = list => ({
    type: LOAD,
    list,
});

const loadOther = list => ({
    type: LOAD_OTHER,
    list,
});

const add = (playlist) => ({
    type: ADD,
    playlist
});

export const loadUserPlaylists = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/playlists/byUser/${userId}`);

    if (response.ok) {
        const playlists = await response.json();
        dispatch(load(playlists["playlists"]));
    };
};

export const loadPlaylistById = (playlistId) => async dispatch => {
    const response = await csrfFetch(`/api/playlists/byId/${playlistId}`);

    if (response.ok) {
        const playlist = await response.json();
        dispatch(loadOther([playlist["playlist"]]));
    };
};

export const addPlaylist = (formData) => async dispatch => {
    const response  = await csrfFetch("/api/playlists", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        const playlist = await response.json();
        dispatch(load([playlist["playlist"]]));
        return playlist["playlist"];
    }
};

export const searchPlaylists = (query) => async dispatch => {
    const response = await csrfFetch(`/api/playlists/${query}`);
    if (response.ok) {
        const playlists = await response.json();
        dispatch(load(playlists["playlists"]));
    };
}

export const addTrackToPlaylist = (playlistId, trackId) => async dispatch => {
    await csrfFetch('/api/playlistLinks', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ playlistId, trackId })
    });

    const response = await csrfFetch(`/api/playlists/byId/${playlistId}`);

    if (response.ok) {
        const playlist = await response.json();
        dispatch(add(playlist.playlist));
    };
};

export const removeTrackFromPlaylist = (playlistId, trackId) => async dispatch => {
    await csrfFetch(`/api/playlistLinks/${playlistId}/${trackId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const response = await csrfFetch(`/api/playlists/byId/${playlistId}`);

    if (response.ok) {
        const playlist = await response.json();
        dispatch(add(playlist.playlist));
    };
};

const playlistsReducer = (state = {user: {}, other: {}}, action) => {

    switch (action.type) {
        case LOAD:
            const playlists = {};
            for (let playlist of action.list) {
                playlists[playlist.id] = playlist;
            };
            return { ...state, user: playlists};
        case LOAD_OTHER:
            const otherPlaylists = {};
            for (let playlist of action.list) {
                otherPlaylists[playlist.id] = playlist;
            };
            return {...state, other: otherPlaylists};
        case ADD:
            const updatedPlaylists = {...state.user};
            for (let playlist in updatedPlaylists) {
                if (updatedPlaylists[playlist].id === action.playlist.id) {
                    updatedPlaylists[playlist] = action.playlist
                }
            };
            return {...state, user: updatedPlaylists};
        default:
            return state;
    };
};

export default playlistsReducer;
