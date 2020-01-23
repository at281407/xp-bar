import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import modalReducer from './modalReducer';
import xpBarReducer from './xpBarReducer';
import xpTableReducer from './xpTableReducer';

export default combineReducers({
   loginReducer, 
   modalReducer,
   xpBarReducer,
   xpTableReducer
});