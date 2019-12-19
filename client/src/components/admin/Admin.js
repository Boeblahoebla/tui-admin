// Imports
//////////

// Base dependencies
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Styling
import './assets/styling/admin.scss';

// Admin component
//////////////////
const Admin = ({auth}) => {

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
                </div>
            </div>
        </div>

    );
};


const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, null)(Admin);