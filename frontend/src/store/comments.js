const LOAD = 'comments/LOAD';

const load = list => ({
    type: LOAD,
    list,
});

export const loadComments = (trackId) => async dispatch => {
    const response = await fetch(`/api/comments/${trackId}`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(load(comments["comments"]));
    };
};

const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            const comments = {};
            for (let comment of action.list) {
                comments[comment.id] = comment;
            };
            return comments;
        default:
            return state;
    };
};

export default commentsReducer;
