// Imports
//////////

// Base dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "../../redux/redux-store/store";

import { logOutUserAction, setCurrentUser } from "../../redux/actions/authActions";

// Components
import Navbar from "../navbar/Navbar";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Admin from "../admin/Admin";
import Users from "../users/Users";

// Security
import jwtDecode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import PrivateRoute from '../security/PrivateRoute';


// Typing
/////////

import { DecodedUserType } from "./types/AppTypes";


// Verify validity jwt on app load
//////////////////////////////////

// Check for token
if (localStorage.jwtToken) {
    // Set the token as standard header for requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token & get user info
    const decodedUser:DecodedUserType = jwtDecode(localStorage.jwtToken);

    // Set the current user & isAuthenticated
    store.dispatch(setCurrentUser(decodedUser));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {

        // Start the logOutUserAction from the store
        store.dispatch<any>(logOutUserAction());

        // Redirect to the login page if token is expired
        window.location.href = "/login";
    }
}


// App component
////////////////

export function App() {

    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <PrivateRoute path="/admin" component={Admin} />
                        <Route path="/" component={Users} />
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}