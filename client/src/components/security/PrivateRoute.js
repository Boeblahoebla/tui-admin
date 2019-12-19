
// Imports
//////////

// Dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';


// Component
////////////

const PrivateRoute = ({component: Component, auth, ...rest}) => (
    <Route {...rest}
    render = {props =>
        auth.isAuthenticated
            ? (<Component {...props} />)
            : (<Redirect to="/login" />)
        }
    />
);


// Prop types for the component
PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};


// Map the state as a prop
const mapStateToProps = (state) => ({
    auth: state.auth
});


// Exports
//////////

export default connect(mapStateToProps)(PrivateRoute);