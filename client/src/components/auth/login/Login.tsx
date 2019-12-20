// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

// Redux
import { connect } from 'react-redux';
import { loginUserAction } from "../../../redux/actions/authActions";
import { clearErrorsAction } from '../../../redux/actions/errorActions';

// Components
import { TextFieldGroup } from "../../common/TextFieldGroup";

// Styling
import '../assets/styling/auth.scss';


// Typing
/////////

import { UserLoginDataType } from "../types/AuthTypes";


// Login component
//////////////////
const Login = (props:any) => {

    // State handling
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    // Fetch the history
    let history = useHistory();

    // On submit handler
    const onSubmitHandler = (e: any) => {
        e.preventDefault();

        // Generate the data to login in with
        const userLoginData:UserLoginDataType = {
            email: email,
            password: password
        };

        // Fire up the loginUserAction with the given data
        props.loginUserAction(userLoginData, history);
    };

    // When the user is already authenticated go to the admin page
    useEffect(() => {
        if(props.auth.isAuthenticated) {
            window.location.href="/admin";
        }
    }, [props.auth]);

    // When the component unMounts clear the errors in the Redux state
    useEffect(() => {
        return () => props.clearErrorsAction();
    },[]);


    return (
        <div className="auth">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center auth__header">Log In</h1>
                        <p className="lead text-center auth__lead">
                            Sign in for administrator access
                        </p>

                        <p className="auth__icon text-center mb-4"><i className="fas fa-user fa-4x"/></p>

                        {/* On submit, fire up the onSubmit method*/}
                        <form onSubmit={onSubmitHandler}>

                            {/* Input textfields using the TextFieldGroup component */}
                            <TextFieldGroup
                                name="email"
                                type="email"
                                placeholder="Email address"
                                value={ email }
                                error= { props.error.email }
                                onChange={ (e) => setEmail(e.target.value) }
                            />

                            <TextFieldGroup
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={ password }
                                error= { props.error.password }
                                onChange={ (e: any) => setPassword(e.target.value) }
                            />

                            <input type="submit" value="Submit" className="btn btn-block btn-auth-submit mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Map the redux state to props
const mapStateToProps = (state:any) => ({
    auth: state.auth,
    error: state.error
});


// Export
/////////

export default connect(mapStateToProps, { loginUserAction, clearErrorsAction })(Login)
