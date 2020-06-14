import { TOGGLE_LOADING, SET_CURR_USER, SET_ERRORS } from '../actions/actionTypes';

let initState = {
    isAuthenticated: false,
    user: {},
    isLoading: false,
    errors: ""
}

export const authenticationReducer = (state = initState, action) => {
    switch (action.type) {
    case SET_CURR_USER:
        return {
            ...state,
            isAuthenticated: true,

        }
    case TOGGLE_LOADING:
        return {
            ...state,
            isLoading: action.loadingBool
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