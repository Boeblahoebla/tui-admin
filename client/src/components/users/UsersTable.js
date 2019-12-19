// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Components
import UserItem from './UserItem';


// Component
////////////

const UsersTable = ({data, auth}) => {

    // Generate the user items
    const userItems = data.map(user => (
        <UserItem
            key={user._id} email={user.email} userName={user.name}
        />
    ));

    return (
        <div className="row mb-4 mt-4 users">
            <div className="col-md-12">
                <h1 className="display-3 users__header">
                    <span className="users__header__icon mr-4">
                        <i className="fas fa-users"/>
                    </span>
                    <span className="users__header__title">
                        Users list
                    </span>
                </h1>
                <p className="lead text-muted mb-4 users__lead">Welcome {auth.user.name}</p>

                <div className="mt-4">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            {/* Avatar, username & email */}
                            <th className="users__table-head">Avatar</th>
                            <th className="users__table-head">Username</th>
                            <th className="users__table-head">E-mail</th>
                        </tr>
                        </thead>
                        <tbody>
                            {userItems}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};


// Map the Redux state to props
const mapStateToProps = state => ({
    auth: state.auth
});


// Prop types for the component
UsersTable.propTypes = {
    data: PropTypes.array.isRequired
};


// Export
/////////

export default connect(mapStateToProps, null)(UsersTable);