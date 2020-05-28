import { TOGGLE_LOADING, SET_IS_AUTHENTICATED } from '../actions/actionTypes';

let initState = {
    isAuthenticated: false,
    isLoading: false
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
    default:
        return state
    }
};

export default authenticationReducer;