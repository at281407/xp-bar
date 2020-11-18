import * as types from '../actionTypes'

export const setIsLoadingAction = (isLoading) => dispatch => {
    return dispatch({
        type: types.SET_IS_LOADING,
        loadingBool: isLoading
    });
}