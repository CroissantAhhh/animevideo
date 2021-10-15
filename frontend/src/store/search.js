const STORE = 'search/STORE';

const store = query => ({
    type: STORE,
    query,
});

export const storeSearch = (query) => async dispatch => {
    dispatch(store(query));
};

const initialState = window.localStorage.getItem("search") ?
    { search: window.localStorage.getItem("search") } : {};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE:
            window.localStorage.setItem("search", action.query);
            return {search: action.query};
        default:
            return state;
    };
};

export default searchReducer;
