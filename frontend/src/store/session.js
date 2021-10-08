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
        console.log(userInfo);
        dispatch(login(userInfo));
    };
};

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
