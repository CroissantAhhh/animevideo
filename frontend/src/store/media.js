import { csrfFetch } from "./csrf";

const LOAD = 'media/LOAD';

const load = list => ({
    type: LOAD,
    list,
});

export const loadMedia = () => async dispatch => {
    const response = await fetch('/api/media');

    if (response.ok) {
        const media = await response.json();
        dispatch(load(media["media"]));
    };
};

export const addMedia = (formData) => async dispatch => {
    const response  = await csrfFetch("/api/media", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        const medium = await response.json();
        dispatch(load([medium["medium"]]));
        return medium["medium"];
    }
};

export const loadTargetMedia = (mediumName) => async dispatch => {
    const response = await fetch(`/api/media/search/${mediumName}`);

    if (response.ok) {
        const media = await response.json();
        dispatch(load(media["media"]));
    };
};

export const searchMedia = (query) => async dispatch => {
    const response = await fetch(`/api/media/${query}`);
    if (response.ok) {
        const media = await response.json();
        dispatch(load(media["media"]));
    };
}


const mediaReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            const media = {};
            for (let medium of action.list) {
                media[medium.id] = medium;
            };
            return media;
        default:
            return state;
    };
};

export default mediaReducer;
