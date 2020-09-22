import { TOGGLE_LOADING, SET_CURR_USER, SET_ERRORS, SET_CURR_LOG } from '../actions/actionTypes';

let initState = {
    isAuthenticated: false,
    user: {},
    currentLog: {},
    isLoading: false,
    errors: ""
}

export const authenticationReducer = (state = initState, action) => {
    switch (action.type) {
    case SET_CURR_USER:
        return {
            ...state,
            user: action.user,
            isAuthenticated: action.status
        }
    case TOGGLE_LOADING:
        return {
            ...state,
            isLoading: action.loadingBool
        }
    case SET_CURR_LOG:
        return {
            ...state,
            currentLog: action.log
        }
    case SET_ERRORS:
        return {
            ...state,
            errors: action.errors
        }
    default:
        return state
    }
};

export default authenticationReducer;