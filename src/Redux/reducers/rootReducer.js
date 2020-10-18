import { combineReducers } from 'redux';

import authenticationReducer from './authenticationReducer'
import modalReducer from './modalReducer'
import xpBarReducer from './xpBarReducer'
import dashboardReducer from './dashboardReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
   authenticationReducer, 
   modalReducer,
   dashboardReducer,
   xpBarReducer,
   loadingReducer
});