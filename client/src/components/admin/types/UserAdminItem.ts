// Imports
//////////

import {reduxFullAuthState} from "../../../ts-types/reduxStateTypes";


// UserAdminItem types
//////////////////////

// UserItem prop type
export interface UserAdminItemPropType {
    userName: String | undefined;
    email: String | undefined;
    id: String | undefined;
    deleteUserAction: Function;
    auth: reduxFullAuthState;
}