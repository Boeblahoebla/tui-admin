// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import UsersAdminTable from "./UsersAdminTable";
import Pagination from "../pagination/Pagination";


// Styling
import './assets/styling/admin.scss';


// Typing
/////////

import { reduxFullState, reduxMultipleUserState } from "../../ts-types/reduxStateTypes";
import { AdminPropType } from "./types/AdminPropTypes";
import {Spinner} from "../spinner/Spinner";
import {getAllUsersAction} from "../../redux/actions/userActions";

// Admin component
//////////////////

const Admin = (props: AdminPropType) => {

    // Fetch user state & getAllUsersAction from the props
    const { getAllUsersAction, user, auth } = props;

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
        dataContent = <UsersAdminTable data={data.data}/>;
        functionalityContent =
            <Pagination data={data} decrementPage={decrementPage} incrementPage={incrementPage}
                        setPageEnd={setPageEnd} setPageBegin={setPageBegin} selectPage={selectPage}
            />

    }
    else { dataContent = ""; }

    return (
        <div className="container">
            <div className="row mb-4 mt-4 users">
                <div className="col-md-12">
                    <h1 className="display-3 admin__header">
                    <span className="admin__header__icon mr-4">
                        <i className="fas fa-users-cog"/>
                    </span>
                        <span className="admin__header__title">
                        Administration
                    </span>
                    </h1>
                    <p className="lead text-muted mb-4 users__lead">Welcome {auth.user.name}</p>

                    {/* Data content */}
                    { dataContent }

                    {/* Sow spinner if applicable */}
                    { user.loading && <Spinner /> }

                    {/* When the data is still loading show a spinner, else show the content */}
                    { functionalityContent }
                </div>
            </div>
        </div>
    );
};


// Map the Redux state to props
const mapStateToProps = (state:reduxFullState) => ({
    auth: state.auth,
    user: state.user
});


// Export
/////////

export default connect(mapStateToProps, {getAllUsersAction})(Admin);