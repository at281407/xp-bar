import * as types from '../actionTypes'

export const setErrorsActions = (errors) => dispatch => {
    return dispatch({
        type: types.SET_ERRORS,
        errors: errors 
    });
}