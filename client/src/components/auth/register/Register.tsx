// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

// Redux
import { connect } from 'react-redux';
import { registerUserAction } from "../../../redux/actions/authActions";
import { clearErrorsAction } from "../../../redux/actions/errorActions";

// Components
import { TextFieldGroup } from "../../common/TextFieldGroup";

// Styling
import '../assets/styling/auth.scss'


// Typing
/////////

import { RegisterUserDataType } from "../types/AuthTypes";
import { reduxFullState } from "../../../ts-types/reduxStateTypes";


// Register component
/////////////////////
const Register = (props:any) => {

    // Fetch the clearErrors Redux Action from the props
    const { clearErrorsAction } = props;

    // State handling
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ password2, setPassword2 ] = useState("");

    // Fetch the history
    let history = useHistory();

    // On submit handler
    const onSubmitHandler = (e: any) => {
        e.preventDefault();

        // Generate the data to register a user with
        const registerUserData:RegisterUserDataType = {
            name: name,
            email: email,
            password: password,
            password2: password2
        };

        // Fire up the loginUserAction with the given data
        props.registerUserAction(registerUserData, history);
    };


    // When the user is already authenticated go to the admin page
    useEffect(() => {
        if(props.auth.isAuthenticated) {
            window.location.href="/admin";
        }
    }, [props.auth]);

    // When the component unMounts clear the errors in the Redux state
    useEffect(() => {
        return () => clearErrorsAction()
    },[clearErrorsAction]);

    return (
        <div className="auth">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center auth__header">Sign Up</h1>
                        <p className="lead text-center auth_lead"> Sign up as an administrator </p>

                        <p className="auth__icon text-center mb-4"><i className="far fa-user fa-4x"/></p>

                        {/* On submit, fire up the onSubmit method */}
                        <form noValidate onSubmit={ onSubmitHandler }>

                            {/* Input textfields using the TextFieldGroup component */}
                            <TextFieldGroup
                                name="name"
                                type="text"
                                placeholder="Username"
                                value={ name }
                                error={ props.error.name }
                                onChange={ (e:any) => setName(e.target.value) }
                            />

                            <TextFieldGroup
                                name="email"
                                type="email"
                                placeholder="Email address"
                                value={ email }
                                error={ props.error.email }
                                onChange={ (e:any) => setEmail(e.target.value) }
                            />

                            <TextFieldGroup
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={ password }
                                error={ props.error.password }
                                onChange={ (e:any) => setPassword(e.target.value) }
                            />

                            <TextFieldGroup
                                name="password2"
                                type="password"
                                placeholder="Repeat password"
                                value={ password2 }
                                error={ props.error.password2 }
                                onChange={ (e:any) => setPassword2(e.target.value) }
                            />

                            <input type="submit" value="Register" className="btn btn-block btn-auth-submit mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Map the redux state to props
const mapStateToProps = (state:reduxFullState) => ({
    auth: state.auth,
    error: state.error
});


// Export
/////////

export default connect(mapStateToProps, { registerUserAction, clearErrorsAction })(Register)



