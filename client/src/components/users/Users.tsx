// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { getAllUsersAction } from "../../redux/actions/userActions";

// Components
import Pagination from "../pagination/Pagination";
import UsersTable from "./UsersTable";
import { Spinner } from "../spinner/Spinner";

// CSS
import "./assets/styling/users.scss";


// Typing
/////////

import { reduxFullState, reduxMultipleUserState } from "../../ts-types/reduxStateTypes";
import { UsersPropType } from "./types/Users";


// Component
////////////

const Users = (props: UsersPropType) => {

    // Fetch user state & getAllUsersAction from the props
    const { getAllUsersAction, user, auth } = props;

    // Component state
    const [data, setData] = useState<reduxMultipleUserState | undefined>(undefined);
    const [page, setPage] = useState(1);

    // When the component 'mounts' fetch the data from the backend &
    // fetch the data again when the chosen page changes
    useEffect(() => {
        getAllUsersAction(page, 5);
    }, [getAllUsersAction, page]);

    // When the users props change as a result of a Redux action, set the state with the fresh data
    useEffect(() => {
        if(user.users) {
            setData(user.users)
        }
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
            <div className="row mb-4 mt-4 users">
                <div className="col-md-12">

                    {/* Component header */}
                    <h1 className="display-3 users__header">
                        <span className="users__header__icon mr-4">
                            <i className="fas fa-users"/>
                        </span>
                        <span className="users__header__title">
                            Users list
                        </span>
                    </h1>

                    {/* Welcome screen */}
                    { auth && <p className="lead text-muted mb-4 users__lead">Welcome {auth.user.name}</p> }

                    {/* Data content */}
                    { dataContent }

                    {/* Sow spinner if applicable */}
                    { user.loading && <Spinner /> }

                    {/* When the data is still loading show a spinner, else show the content */}
                    { functionalityContent }

                </div>
            </div>
        </div>

    )
};


// Map the redux state to props
const mapStateToProps = (state:reduxFullState) => ({
    user: state.user,
    auth: state.auth
});


// Export
/////////

export default connect(mapStateToProps, { getAllUsersAction })(Users);











