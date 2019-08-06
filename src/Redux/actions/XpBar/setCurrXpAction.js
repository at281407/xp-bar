import * as types from '../actionTypes'

export const setCurrXpAction = (newXp) => dispatch => {
    return dispatch({
        type: types.SET_CURR_XP,
        currXp: newXp
    });
}