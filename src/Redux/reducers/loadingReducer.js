import { SET_IS_LOADING } from '../actions/actionTypes';

let initState = {
    // Global Modal
    isLoading: false
}

export const loadingReducer = (state = initState, action) => {
    switch (action.type) {
    case SET_IS_LOADING:
        return {
            ...state,
            isLoading: action.loadingBool
        }
    default:
        return state
    }
};

export default loadingReducer;