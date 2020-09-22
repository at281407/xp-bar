import * as types from '../actionTypes'

export const setCurrentLogAction = (currLog) => dispatch => {
    console.log(currLog);
    return dispatch({
        type: types.SET_CURR_LOG,
        log: currLog,
    });
}