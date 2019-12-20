// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getAllUsersAction } from "../../redux/actions/userActions";

// Components
import Pagination from '../pagination/Pagination';
import UsersTable from './UsersTable';
import { Spinner } from "../spinner/Spinner";

// CSS
import './assets/styling/users.scss'


// Typing
/////////

import { reduxFullState, reduxMultipleUserState } from "../../ts-types/reduxStateTypes";
import { UsersPropType } from "./types/Users";


// Component
////////////

const Users = (props: UsersPropType) => {

    // Fetch user state & getAllUsersAction from the props
    const { getAllUsersAction, user } = props;

    // Component state
    const [data, setData] = useState<reduxMultipleUserState | undefined>(undefined);
    const [page, setPage] = useState(1);

    // When the component 'mounts' fetch the data from the backend &
    // fetch the data again when the chosen page changes
    useEffect(() => {

        getAllUsersAction(page, 5);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);


    useEffect(() => {
        if(user.users) {
            setData(user.users)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user.users]);

    /******************
     * Event handlers *
     ******************/

    // Decrement page handler
    const decrementPage = () => { page > 1 && setPage(page - 1) };

    // Increment page handler
    const incrementPage = () => { if(data) { page < data.pages && setPage(page + 1) } };

    // Set first page handler
    const setPageBegin = () => { setPage(1) };

    // Set last page handler
    const setPageEnd = () => { if(data) { setPage(data.pages) } };

    // Set page number handler
    const selectPage = (value:number) => {
        if(data) {
            (Math.abs(value) <= data.pages)
                ? setPage(Math.abs(value))
                : setPage(data.pages)
        }
    };

    /*************************
     * End of Event handlers *
     *************************/

    let dataContent;
    let functionalityContent;
    if(data) {
        dataContent = <UsersTable data={data.data}/>;
        functionalityContent =
            <Pagination data={data} decrementPage={decrementPage} incrementPage={incrementPage}
                        setPageEnd={setPageEnd} setPageBegin={setPageBegin} selectPage={selectPage}
            />

    }
    else { dataContent = ""; }


    return (
        <div className="container">
            {dataContent}

            {user.loading && <Spinner/>}

            {/* When the data is still loading show a spinner, else show the content */}
            {functionalityContent}
        </div>
    )
};


// Map the redux state to props
const mapStateToProps = (state:reduxFullState) => ({
    user: state.user
});


// Export
/////////

export default connect(mapStateToProps, { getAllUsersAction })(Users);











