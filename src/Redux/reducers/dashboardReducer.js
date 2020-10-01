import { TOGGLE_LOG_REMOVE_ACTIVE } from '../actions/actionTypes';

let initState = {
    // Global Modal
    isLogRemoveActive: false
}

export const dashboardReducer = (state = initState, action) => {
    switch (action.type) {
    case TOGGLE_LOG_REMOVE_ACTIVE:
        return {
            ...state,
            isLogRemoveActive: action.logRemoveBool
        }
    default:
        return state
    }
};

export default dashboardReducer;