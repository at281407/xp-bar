import * as types from '../actionTypes'

export const showErrorPopupAction = (messageArray) => dispatch => {
    const newArray = messageArray;
    return dispatch({
        type: types.SHOW_ERROR_POPUP,
        messages: newArray
    })

}