import { combineReducers } from 'redux';

import loginReducer from './loginReducer'
import modalReducer from './modalReducer'

export default combineReducers({
   loginReducer, 
   modalReducer
});