import { csrfFetch } from "./csrf";

const LOAD = 'comments/LOAD';
const ADD_ONE = 'comments/ADD_ONE';

const load = list => ({
    type: LOAD,
    list,
});

const addOne = comment => ({
    type: ADD_ONE,
    comment,
});

export const loadComments = (trackId) => async dispatch => {
    const response = await fetch(`/api/comments/${trackId}`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(load(comments["comments"]));
    };
};

export const addComment = (formData) => async dispatch => {
    const response = await csrfFetch("/api/comments", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(addOne(comment["comment"]));
    }
}

const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            const comments = {};
            for (let comment of action.list) {
                comments[comment.id] = comment;
            };
            return comments;
        case ADD_ONE:
            return {...state, [action.comment.id]: action.comment}
        default:
            return state;
    };
};

export default commentsReducer;
