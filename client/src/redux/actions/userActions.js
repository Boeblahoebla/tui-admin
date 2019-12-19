// Imports
//////////

// Data functionality
import axios from 'axios/index';

// Action types
import { GET_ALL_USERS, USERS_LOADING } from './types';


// Exports
//////////

// Register User Action
export const getAllUsersAction = (page, size) => dispatch => {

    // Set users loading
    dispatch(setUsersLoadingAction());

    // Do the request & dispatch the right actions depending on the server response
    axios
        .get(`/api/users/all?pageNo=${page}&size=${size}`)
        .then(res => dispatch({
            type: GET_ALL_USERS,
            payload: res.data
        }))
        .catch(error => dispatch({
            type: GET_ALL_USERS,
            payload:[]
        }))
};


// Set profile loading action
export const setUsersLoadingAction = () => {
    return {
        type: USERS_LOADING
    }
};