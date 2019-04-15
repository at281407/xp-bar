import { SET_CURR_LEVEL, SET_CURR_XP, CLEAR_XP } from '../actions/actionTypes';

let initState = {
    currXp: 0,
    isReseting: false,
    currLevel: {
      level: null,
      xpFloor: null,
      nextLevel: null
    }
}

export const xpBarReducer = (state = initState, action) => {
    switch (action.type) {
    case SET_CURR_LEVEL:
        return {
            ...state,
            currLevel: action.currLevel
        }
    case SET_CURR_XP:
        return {
            ...state,
            currXp: action.currXp
        }
    case CLEAR_XP:
        return initState
    default:
        return state
    }
};

export default xpBarReducer;