import * as types from '../actionTypes'

export const setIsAuthenticated = (status) => dispatch => {
    return dispatch({
        type: types.SET_IS_AUTHENTICATED,
        status: status
    });
}