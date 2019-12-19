// Imports
//////////

import { reduxFullAuthState } from "../../../ts-types/reduxStateTypes";
import { RouteProps } from "react-router";


// PrivateRoute typing
//////////////////////

// PrivateRoutePropType
export interface PrivateRoutePropType extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
    auth: reduxFullAuthState;
}