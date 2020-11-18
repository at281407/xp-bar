import * as types from '../actionTypes'

export const setCurrentLogAction = (currLog) => dispatch => {
    return dispatch({
        type: types.SET_CURR_LOG,
        log: currLog
    });
}