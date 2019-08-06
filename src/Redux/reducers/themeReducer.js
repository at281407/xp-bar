import { TOGGLE_LOGIN_FORM } from '../actions/actionTypes';

let initState = {
    fillColor: 
}

export const themeReducer = (state = initState, action) => {
    switch (action.type) {
    case SET_THEME:
        return {
            ...state,
            isLoginFormOpen: action.loginBool
        }
    default:
        return state
    }
};

export default themeReducer;