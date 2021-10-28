import { csrfFetch } from "./csrf";

const LOAD = 'playlists/LOAD';
const LOAD_OTHER = 'playlists/LOAD_OTHER';

const load = list => ({
    type: LOAD,
    list,
});

const loadOther = list => ({
    type: LOAD_OTHER,
    list,
})

export const loadUserPlaylists = (userId) => async dispatch => {
    const response = await fetch(`/api/playlists/byUser/${userId}`);

    if (response.ok) {
        const playlists = await response.json();
        dispatch(load(playlists["playlists"]));
    };
};

export const loadPlaylistById = (playlistId) => async dispatch => {
    const response = await fetch(`/api/playlists/byId/${playlistId}`);

    if (response.ok) {
        const playlists = await response.json();
        dispatch(loadOther([playlists["playlists"]]));
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
    const response = await fetch(`/api/playlists/${query}`);
    if (response.ok) {
        const playlists = await response.json();
        dispatch(load(playlists["playlists"]));
    };
}

const playlistsReducer = (state = {user: {}, other: {}}, action) => {
    switch (action.type) {
        case LOAD:
            const playlists = {};
            for (let playlist of action.list) {
                playlists[playlist.id] = playlist;
            };
            return {...state, user: playlists};
        case LOAD_OTHER:
            const otherPlaylists = {};
            for (let playlist of action.list) {
                otherPlaylists[playlist.id] = playlist;
            };
            return {...state, other: otherPlaylists};
        default:
            return state;
    };
};

export default playlistsReducer;
