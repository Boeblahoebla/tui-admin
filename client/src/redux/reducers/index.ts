// Imports
//////////

// Dependencies
import { combineReducers } from 'redux';

// Reducers
import authReducer from "./authentication/authReducer";
import errorReducer from "./error/errorReducer";
import userReducer from "./user/userReducer";


// Exports
//////////

export default combineReducers<any>({
    auth: authReducer,
    error: errorReducer,
    user: userReducer
});