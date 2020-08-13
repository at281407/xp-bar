import { SHOW_MODAL, HIDE_MODAL, DEACTIVATE_MODAL } from '../actions/actionTypes';

let initState = {
    // Global Modal
    modalType: "",
    isActive: false,
    isVisible: false
}

export const modalReducer = (state = initState, action) => {
    switch (action.type) {
    case SHOW_MODAL:
        return {
            ...state,
            modalType: action.payload.modalType,
            isActive: action.payload.modalActivityBool,
            isVisible: action.payload.modalActivityBool
        }
    case HIDE_MODAL:
        return {
            ...state,
            isVisible: false
        }
    case DEACTIVATE_MODAL:
        return {
            ...state,
            modalType: "",
            isActive: false
        }
    default:
        return state
    }
};

export default modalReducer;