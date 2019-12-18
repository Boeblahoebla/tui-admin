// Imports
//////////

// Base dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import { Navbar } from "../navbar/Navbar";
import { Admin } from "../admin/Admin";
import { Login } from "../auth/login/Login.tsx";
import { UsersList } from "../users-list/UsersList";
import { Register } from "../auth/register/Register.tsx";

// Styling
import './assets/styling/App.scss';


// App component
////////////////
export function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/login" component={ Login } />
                    <Route path="/register" component={ Register } />
                    <Route path="/admin" component={ Admin } />
                    <Route path="/" component={UsersList} />
                </Switch>
            </Router>
        </div>
    );
}