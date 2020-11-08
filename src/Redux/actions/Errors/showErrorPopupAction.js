import * as types from '../actionTypes'

export const showErrorPopupAction = (messageArray) => dispatch => {
    return dispatch({
        type: types.SHOW_ERROR_POPUP,
        messages: messageArray
    })

}