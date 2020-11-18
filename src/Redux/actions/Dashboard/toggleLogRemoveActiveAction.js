import * as types from '../actionTypes'

export const toggleLogRemoveActiveAction = (currentState) => dispatch => {
        return dispatch({
            type: types.TOGGLE_LOG_REMOVE_ACTIVE,
            logRemoveBool: !currentState
        });
}