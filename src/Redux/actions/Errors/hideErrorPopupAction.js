import * as types from '../actionTypes'

export const hideErrorPopupAction = () => dispatch => {
    return dispatch({
        type: types.HIDE_ERROR_POPUP
    })

}