// Imports
//////////

import {reduxMultipleUserState} from "../../../ts-types/reduxStateTypes";

// Pagination types
///////////////////

// PaginationPropType
export interface PaginationPropType {
    data: reduxMultipleUserState,
    decrementPage: Function;
    incrementPage: Function;
    setPageEnd: Function;
    setPageBegin: Function;
    selectPage: Function
}