// Imports
//////////

// Base dependencies
import * as React from "react";
import { Route, Redirect } from "react-router-dom";

// Redux
import { connect } from "react-redux";


// Typing
/////////

import { reduxFullState } from "../../ts-types/reduxStateTypes";
import { PrivateRoutePropType } from './types/PrivateRoutePropType'


// PrivateRoute component
/////////////////////////

const PrivateRoute = (props: PrivateRoutePropType) => {
    const { component: Component, auth, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                auth.isAuthenticated ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: routeProps.location }
                        }}
                    />
                )
            }
        />
    );
};

// Map the state as a prop
const mapStateToProps = (state:reduxFullState) => ({
    auth: state.auth
});


// Exports
//////////

export default connect(mapStateToProps)(PrivateRoute);