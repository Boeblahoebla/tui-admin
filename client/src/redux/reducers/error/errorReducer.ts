// Imports
//////////

import {CLEAR_ERRORS, FETCH_ERRORS} from "../../actions/types";


// Typing
/////////

import { ActionType } from "../types/ReducerTypes";


// Init Error State
////////////////////

const initialErrorState = {};


// Exports
//////////

export default function(state = initialErrorState, action:ActionType) {
    switch(action.type) {
        case FETCH_ERRORS:
            return action.payload;
        case CLEAR_ERRORS:
            return action.payload;
        default:
            return state;
    }
}