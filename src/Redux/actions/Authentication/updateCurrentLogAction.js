import * as types from '../actionTypes'

export const updateCurrentLogAction = (newLog) => dispatch => {
    return dispatch({
        type: types.UPDATE_CURR_LOG,
        log: newLog
    });
}