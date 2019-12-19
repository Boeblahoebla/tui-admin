// Imports
//////////

// Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducer
import rootReducer from '../reducers/index';


// Redux store
//////////////

// Initial state variable
const initialState = {};

// Assign the Redux middleware
const middleware = [thunk];

// Create the Redux store for our states
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


// Exports
//////////

export default store;