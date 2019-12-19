// Imports
//////////

// Dependencies
import { combineReducers } from 'redux';

// Reducers
import authReducer from "./authentication/authReducer";
import errorReducer from "./error/errorReducer";


// Exports
//////////

export default combineReducers({
    auth: authReducer,
    error: errorReducer
})