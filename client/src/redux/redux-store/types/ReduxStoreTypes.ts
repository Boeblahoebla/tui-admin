// Imports
//////////

import { compose } from "redux";


// Redux Store Types
////////////////////

// Redux devtools
export interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}