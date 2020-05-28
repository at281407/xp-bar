import * as types from '../actionTypes'

export const setIsAuthenticated = (isLoading) => dispatch => {
    return dispatch({
        type: types.TOGGLE_LOADING,
        status: isLoading
    });
}