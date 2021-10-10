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

const mediaReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            const media = {};
            console.log(action.list);
            for (let medium of action.list) {
                media[medium.id] = medium;
            };
            return media;
        default:
            return state;
    };
};

export default mediaReducer;
