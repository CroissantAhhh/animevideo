import { csrfFetch } from "./csrf";

const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

const login = (userInfo) => ({
    type: LOGIN,
    userInfo
});

const logout = () => ({
    type: LOGOUT
});

export const signup = (userInfo) => async dispatch => {
    const { username, email, password } = userInfo;
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    if (response.ok) {
        const userInfo = await response.json();
        dispatch(login(userInfo));
    }
}

export const loginSession = (username, password) => async dispatch => {
    const response = await csrfFetch(`/api/session`, {
        method: "POST",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            credential: username,
            password: password
        })
    });

    if (response.ok) {
        const userInfo = await response.json();
        dispatch(login(userInfo));
    };
};

export const retainSession = (username, password) => async dispatch => {
    const response = await fetch(`/api/session`);

    if (response.ok) {
        const userInfo = await response.json();
        dispatch(login(userInfo));
    }
}

export const logoutSession = () => async dispatch => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });

    if (response.ok) {
        dispatch(logout());
    }
}
const sessionReducer = (state = { user: null }, action) => {
    switch(action.type) {
        case LOGIN:
            let newState = action.userInfo ;
            return newState;
        case LOGOUT:
            return { user: null };
        default:
            return state;
    }
}

export default sessionReducer;
