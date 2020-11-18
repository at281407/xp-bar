import * as types from '../actionTypes'

export const setErrorsAction = (error) => dispatch => {
    return dispatch({
        type: types.SET_ERRORS,
        errors: error
    });
}