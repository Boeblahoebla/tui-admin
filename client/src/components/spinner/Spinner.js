// Imports
//////////

// Base dependencies
import React from 'react';

// Media
import spinnerImg from './assets/img/spinner.gif';

// Styling
import './assets/styling/spinner.scss';


// Spinner component
////////////////////
export const Spinner = () => {
    return (
        <div>
            <img className="spinner" src={spinnerImg} alt="Loading..."/>
        </div>
    );
};