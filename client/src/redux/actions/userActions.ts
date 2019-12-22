// Imports
//////////

// Data functionality
import axios from 'axios/index';

// Action types
import { GET_ALL_USERS, USERS_LOADING, REMOVE_USER_BY_ID, FETCH_ERRORS } from './types';


// Typing
/////////

import { HistoryType } from "./types/ActionTypes";
interface userUpdateData {
    name: string;
}


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

// Update user action
export const updateUserAction = (id:string, name:userUpdateData, history:HistoryType) => (dispatch:any) => {
    axios
        .put(`/api/users/${id}`, name)
        .then(res => {
            console.log('success');
            dispatch(getAllUsersAction(pageNumber, sizeNumber));
            history.push('/admin')
        })
        .catch(err =>
            dispatch({
                type: FETCH_ERRORS,
                payload: err.response.data
            })
        )
};

// Delete user action
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
        .catch(error => dispatch(getAllUsersAction(pageNumber, sizeNumber)))
};


// Set profile loading action
export const setUsersLoadingAction = () => {
    return {
        type: USERS_LOADING
    }
};