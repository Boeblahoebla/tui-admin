// Imports
//////////

import {reduxFullAuthState, reduxFullUserState} from "../../../ts-types/reduxStateTypes";


// Admin types
//////////////

// AdminPropType
export interface AdminPropType {
    auth: reduxFullAuthState;
    user: reduxFullUserState;
    getAllUsersAction: Function;
}