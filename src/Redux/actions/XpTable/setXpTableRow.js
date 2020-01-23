import * as types from '../actionTypes'

export const setXpTableRow = (newRow) => dispatch => {
    return dispatch({
        type: types.SET_TABLE_ROW,
        xpRow: newRow
    });
}