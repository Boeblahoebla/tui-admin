// Imports
//////////

import {reduxFullUserState} from "../../../ts-types/reduxStateTypes";


// Users types
//////////////

// UsersPropType
export interface UsersPropType {
    getAllUsersAction: Function;
    user: reduxFullUserState
}