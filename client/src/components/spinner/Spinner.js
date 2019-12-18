// Imports
//////////

// Base dependencies
import React from 'react';

// Media
import spinnerImg from './assets/img/spinner.gif';


// Spinner component
////////////////////
export const Spinner = () => {
    return (
        <div>
            <img className="spinner" src={spinnerImg} alt="Loading..." style={{width:'15%', height:'15%', margin: 'auto', display:'block'}}/>
        </div>
    );
};