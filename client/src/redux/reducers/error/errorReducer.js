// Imports
//////////

import { FETCH_ERRORS } from "../../actions/types";


// Init Error State
////////////////////

const initialErrorState = {};


// Exports
//////////

export default function(state = initialErrorState, action) {
    switch(action.type) {
        case FETCH_ERRORS:
            return action.payload;
        default:
            return state;
    }
}