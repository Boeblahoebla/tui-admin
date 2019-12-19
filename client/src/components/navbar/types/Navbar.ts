// Imports
//////////

import { reduxFullAuthState } from "../../../ts-types/reduxStateTypes";


// Navbar typing
////////////////

// Navbar prop type
export interface NavbarPropType {
    auth: reduxFullAuthState;
    logOutUserAction: Function
}