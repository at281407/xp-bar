import { TOGGLE_LOADING, SET_IS_AUTHENTICATED, SET_ERRORS } from '../actions/actionTypes';

let initState = {
    isAuthenticated: false,
    isLoading: false,
    errors: []
}

export const authenticationReducer = (state = initState, action) => {
    switch (action.type) {
    case SET_IS_AUTHENTICATED:
        return {
            ...state,
            isAuthenticated: action.status
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