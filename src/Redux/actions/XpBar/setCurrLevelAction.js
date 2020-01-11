import * as types from '../actionTypes'

export const setCurrLevelAction = (newLevel) => dispatch => {
    return dispatch({
        type: types.SET_CURR_LEVEL,
        currLevel: newLevel
    });
}