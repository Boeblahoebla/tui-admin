// Imports
//////////

import { GET_ALL_USERS, FETCH_ERRORS, USERS_LOADING } from "../../actions/types";


// Init Error State
////////////////////

const initialUserState = {
    user: null,
    users: null,
    loading: false
};


// Exports
//////////

export default function(state = initialUserState, action) {
    switch(action.type) {
        case FETCH_ERRORS:
            return action.payload;
        case USERS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        default:
            return state;
    }
}