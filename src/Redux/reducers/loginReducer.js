import { TOGGLE_LOGIN_FORM } from '../actions/actionTypes';

let initState = {
    isLoginFormOpen: false
}

export const loginReducer = (state = initState, action) => {
    switch (action.type) {
    case TOGGLE_LOGIN_FORM:
        return {
            ...state,
            isLoginFormOpen: action.loginBool
        }
    default:
        return state
    }
};

export default loginReducer;