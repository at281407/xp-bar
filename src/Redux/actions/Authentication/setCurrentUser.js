import * as types from '../actionTypes'

export const setCurrentUser = (status) => dispatch => {
    return dispatch({
        type: types.SET_CURR_USER,
        status: status
    });
}