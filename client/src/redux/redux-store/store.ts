// Imports
//////////

// Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducer
import rootReducer from '../reducers/index';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


// Redux store
//////////////

// Initial state variable
const initialState = {};

// Assign the Redux middleware
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// Create the Redux store for our states
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    composeEnhancers()
));


// Exports
//////////

export default store;