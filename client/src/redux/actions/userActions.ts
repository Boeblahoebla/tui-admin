// Imports
//////////

// Data functionality
import axios from 'axios/index';

// Action types
import { GET_ALL_USERS, USERS_LOADING, REMOVE_USER_BY_ID  } from './types';


// Variables
////////////

let pageNumber = 0;
let sizeNumber = 0;

// Exports
//////////

// Register User Action
export const getAllUsersAction = (page:number, size:number) => (dispatch:any) => {

    pageNumber = page;
    sizeNumber = size;

    // Set users loading
    dispatch(setUsersLoadingAction());

    // Do the request & dispatch the right actions depending on the server response
    axios
        .get(`/api/users/all?pageNo=${pageNumber}&size=${sizeNumber}`)
        .then(res => dispatch({
            type: GET_ALL_USERS,
            payload: res.data
        }))
        .catch(error => dispatch({
            type: GET_ALL_USERS,
            payload:[]
        }))
};


export const deleteUserAction = (id:string) => (dispatch:any) => {

    // Set users loading
    dispatch(setUsersLoadingAction());

    // Do the request & dispatch the right actions depending on the server response
    axios
        .delete(`/api/users/${id}`)
        .then(res => {
            dispatch({
                type: REMOVE_USER_BY_ID,
                payload: res.data
            });

            dispatch(getAllUsersAction(pageNumber, sizeNumber))
        })
        .catch(error => dispatch(getAllUsersAction(1, 5)))
};


// Set profile loading action
export const setUsersLoadingAction = () => {
    return {
        type: USERS_LOADING
    }
};