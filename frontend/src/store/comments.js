import { csrfFetch } from "./csrf";

const LOAD = 'comments/LOAD';
const ADD_ONE = 'comments/ADD_ONE';
const REMOVE_ONE = 'comments/REMOVE_ONE';

const load = list => ({
    type: LOAD,
    list,
});

const addOne = comment => ({
    type: ADD_ONE,
    comment,
});

const removeOne = id => ({
    type: REMOVE_ONE,
    id
})

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

export const updateComment = (formData) => async dispatch => {
    const response = await csrfFetch("/api/comments", {
        method: "PUT",
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

export const deleteComment = (id) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        dispatch(removeOne(id));
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
        case REMOVE_ONE:
            const newState = {...state}
            delete newState[action.id];
            return newState;
        default:
            return state;
    };
};

export default commentsReducer;
