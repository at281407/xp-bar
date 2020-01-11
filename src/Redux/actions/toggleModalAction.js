import * as types from './actionTypes'

const hideModal = (time) => dispatch => {
    let delayHiding = time ? time : 0;
    setTimeout(function(){
        dispatch({type: types.HIDE_MODAL});
        setTimeout(function(){
            dispatch({type: types.DEACTIVATE_MODAL});
        }, 500);
    }, delayHiding);

}


export const toggleModalAction = (type, activityBool, delayTime) => dispatch => {
    //If true
    if(activityBool){
        return dispatch({
            type: types.SHOW_MODAL,
            payload: {
                modalType: type,
                modalActivityBool: activityBool
            }
        });
    }
    else {
        return dispatch(hideModal(delayTime));
    }
}