import { SHOW_ERROR_POPUP, HIDE_ERROR_POPUP, REMOVE_ERROR_POPUP} from '../actions/actionTypes';

let initState = {
    messages: []
}

export const loadingReducer = (state = initState, action) => {
    switch (action.type) {
    case SHOW_ERROR_POPUP:
        return {
            ...state,
            messages: action.messages
        }
    case HIDE_ERROR_POPUP:
        return {
            ...state,
            messages: []
        }
    case REMOVE_ERROR_POPUP:
        return {
            ...state,
            messages: action.messages
        }
    default:
        return state
    }
};

export default loadingReducer;