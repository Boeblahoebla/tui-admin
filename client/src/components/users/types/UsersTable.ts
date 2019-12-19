// Imports
//////////

import { reduxFullAuthState } from "../../../ts-types/reduxStateTypes";


// UsersTable types
///////////////////

// UsersTablePropType
export interface UsersTablePropType {
    data: Object[];
    auth?: reduxFullAuthState
}