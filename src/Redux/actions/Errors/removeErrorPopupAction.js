import * as types from '../actionTypes'

export const removeErrorPopupAction = (messageArray, removeIndex) => dispatch => {
    
    var newArray = messageArray.filter((message, i) =>{
        return removeIndex !== i
    });

    return dispatch({
        type: types.REMOVE_ERROR_POPUP,
        messages: newArray
    })

}