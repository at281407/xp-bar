import * as types from '../actionTypes'

export const setErrorsAction = (errors) => dispatch => {
    return dispatch({
        type: types.SET_ERRORS,
        errors: errors 
    });
}