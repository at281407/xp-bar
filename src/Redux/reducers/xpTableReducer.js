import { SET_TABLE_ROW, REMOVE_TABLE_ROW } from '../actions/actionTypes';

let initState = {
    areOptionsVisible: false,
    xpRows: [
        {
            xp: 153,
            description: "Slayed a bunch of goblins"
        },
        {
            xp: 252,
            description: "Finished well quest"
        }
    ]
}

export const xpBarReducer = (state = initState, action) => {
    switch (action.type) {
    case SET_TABLE_ROW:
        return {
            ...state,
            xpRows: [...state.xpRows, action.xpRow]
        }
    default:
        return state
    }
};

export default xpBarReducer;