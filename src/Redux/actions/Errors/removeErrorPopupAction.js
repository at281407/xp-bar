import * as types from '../actionTypes'

export const showErrorPopupAction = (messageArray, removeIndex) => dispatch => {
    messageArray.splice(removeIndex, 1);
    return dispatch({
        type: types.REMOVE_ERROR_POPUP,
        messages: messageArray
    })

}