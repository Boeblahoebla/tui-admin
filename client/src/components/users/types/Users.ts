// Imports
//////////

import {reduxFullAuthState, reduxFullUserState} from "../../../ts-types/reduxStateTypes";


// Users types
//////////////

// UsersPropType
export interface UsersPropType {
    getAllUsersAction: Function;
    user: reduxFullUserState,
    auth: reduxFullAuthState
}