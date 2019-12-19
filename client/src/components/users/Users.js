// Imports
//////////

// Base dependencies
import React, {useState, useEffect} from 'react';

// Redux
import { connect } from 'react-redux';
import { getAllUsersAction } from "../../redux/actions/userActions";

// Components
import Pagination from '../pagination/Pagination';
import UsersTable from './UsersTable';

// CSS
import './assets/styling/users.scss'
import { Spinner } from "../spinner/Spinner";


// Component
////////////

const Users = (props) => {

    // Component state
    const [data, setData] = useState({});
    const [page, setPage] = useState(1);

    // When the component 'mounts' fetch the data from the backend &
    // fetch the data again when the chosen page changes
    useEffect(() => {

        props.getAllUsersAction(page, 5);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);


    useEffect(() => {
        if(props.user.users) {
            setData(props.user.users)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.user.users]);

    /******************
     * Event handlers *
     ******************/

    // Decrement page handler
    const decrementPage = () => { page > 1 && setPage(page - 1) };

    // Increment page handler
    const incrementPage = () => { page < data.pages && setPage(page + 1) };

    // Set first page handler
    const setPageBegin = () => { setPage(1) };

    // Set last page handler
    const setPageEnd = () => { setPage(data.pages) };

    // Set page number handler
    const selectPage = (value) => {
        (Math.abs(value) <= data.pages)
            ? setPage(Math.abs(value))
            : setPage(data.pages)
    };

    /*************************
     * End of Event handlers *
     *************************/

    const content = props.user.loading
        ? <Spinner/>
        : (
            <Pagination data={data} decrementPage={decrementPage} incrementPage={incrementPage}
                        setPageEnd={setPageEnd} setPageBegin={setPageBegin} selectPage={selectPage}
            />
        );

    return (
        <div className="container">
            {data.data && <UsersTable data={data.data}/>}

            {/* When the data is still loading show a spinner, else show the content */}
            {content}
        </div>
    )
};


// Map the redux state to props
const mapStateToProps = state => ({
    user: state.user
});


// Export
/////////

export default connect(mapStateToProps, { getAllUsersAction })(Users);











