import * as types from '../actionTypes'

export const setCurrentUserAction = (user) => dispatch => {
    return dispatch({
        type: types.SET_CURR_USER,
        user: user,
        status: user.email ? true : false
    });
}