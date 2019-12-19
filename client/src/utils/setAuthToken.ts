// imports
//////////

// Connectivity
import axios from 'axios';


// Set the token as header to all requests
//////////////////////////////////////////

const setAuthToken = (token:object) => {
    if(token) {
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
};


// Exports
//////////

export default setAuthToken;