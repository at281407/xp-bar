import { combineReducers } from 'redux';

import authenticationReducer from './authenticationReducer'
import modalReducer from './modalReducer'
import xpBarReducer from './xpBarReducer'
import dashboardReducer from './dashboardReducer';

export default combineReducers({
   authenticationReducer, 
   modalReducer,
   dashboardReducer,
   xpBarReducer
});