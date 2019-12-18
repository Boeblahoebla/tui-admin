// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from "react-router-dom";

// Media
import navLogo from './assets/img/TUI_logo_rgb.png';

// Styling
import './assets/styling/navbar.scss';


// Navbar component
///////////////////

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            {/* Tui brand logo */}
            <img className="mr-4" src={navLogo} alt="TUI_logo_rgb" width="100px"/>

            {/* Navbar toggler */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            {/* Navigation items */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <>
                    <ul className="navbar-nav ml-2">
                        <li className="navbar-item mr-4">
                            <Link className="nav-link" to="/">Users</Link>
                        </li>
                        <li className="navbar-item mr-4">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                    </ul>
                </>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="navbar-item d-flex align-items-center mr-4">
                            <Link className="nav-link" to="/login">
                                Login <i className="fas fa-sign-in-alt fa-lg ml-2 text-align-center"/>
                            </Link>
                        </li>
                        <li className="navbar-item d-flex align-items-center">
                            <Link className="nav-link" to="/register">
                                Register <i className="far fa-user fa-lg ml-2 text-align-center"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};