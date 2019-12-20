// Imports
//////////

// Action types
import { CLEAR_ERRORS } from './types';


// Exports
//////////

// Clear errors action
export const clearErrorsAction = () => (dispatch:any) => {
    dispatch({
        type: CLEAR_ERRORS,
        payload: {}
    })
};