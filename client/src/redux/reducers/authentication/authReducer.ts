// Imports
//////////

import { SET_CURRENT_USER } from '../../actions/types';
import isEmpty from '../../../utils/isempty';


// Typing
/////////

import { ActionType } from "../types/ReducerTypes";


// Init Auth State
//////////////////

const initialAuthState = {
    isAuthenticated: false,
    user: {}
};


// Exports
//////////

export default function(state = initialAuthState, action:ActionType) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}
