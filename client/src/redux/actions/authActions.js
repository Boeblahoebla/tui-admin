// Imports
//////////

// Data functionality
import axios from 'axios/index';

// Security
import setAuthToken from '../../utils/setAuthToken';
import jwtDecode from 'jwt-decode';

// Action types
import { FETCH_ERRORS, SET_CURRENT_USER } from './types';


// Exports
//////////

// Register User Action
export const registerUserAction = (userData, history) => dispatch =>{
    axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
        dispatch({
            type: FETCH_ERRORS,
            payload: err.response.data
        })
    );
};


// Login user action- Get user token
export const loginUserAction = (userData, history) => dispatch => {
    axios.post('/api/users/login', userData)
    .then(res => {
        // Save to localStorage
        const { token } = res.data;

        // Set token to local storage
        localStorage.setItem('jwtToken', token);

        // Set token to the Authorization header
        setAuthToken(token);

        // Decode the token to get the user data
        const decodedUser = jwtDecode(token);

        // Set the current user
        dispatch(setCurrentUser(decodedUser));

        // Push to the Admin page
        history.push('/admin')
    })
    .catch(err =>
        dispatch({
            type: FETCH_ERRORS,
            payload: err.response.data
        })
    )
};


// Logout user action
export const logOutUserAction  = () => dispatch =>{

    console.log('logging out user');

    // Remove the token from local storage
    localStorage.removeItem('jwtToken');

    // Remove the authHeader for future requests
    setAuthToken(false);

    // Set the current user to an empty object which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};


// Method to set the current user
export const setCurrentUser = (decodedUser) => {
    return {
        type: SET_CURRENT_USER,
        payload: decodedUser
    }
};