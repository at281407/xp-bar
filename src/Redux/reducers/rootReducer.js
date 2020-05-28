import { combineReducers } from 'redux';

import authenticationReducer from './authenticationReducer'
import modalReducer from './modalReducer'
import xpBarReducer from './xpBarReducer'

export default combineReducers({
   authenticationReducer, 
   modalReducer,
   xpBarReducer
});