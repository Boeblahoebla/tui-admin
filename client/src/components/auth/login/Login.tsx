// Imports
//////////

// Base dependencies
import React, { useState } from 'react';

// Components
import { TextFieldGroup } from "../../common/TextFieldGroup";

// Styling
import '../assets/styling/auth.scss';

// Login component
//////////////////
export const Login = () => {

    // State handling
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    // On submit handler
    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        console.log('Logging in with the following credentials');
        console.log(`email: ${email}, password:${password}`);
    };

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
                            <TextFieldGroup tfProps={{
                                name:"email",
                                type:"email",
                                placeholder:"Email address",
                                value:email,
                                onChange:(e: any) => setEmail(e.target.value)
                            }}/>

                            <TextFieldGroup tfProps={{
                                name:"password",
                                type:"password",
                                placeholder:"Password",
                                value:password,
                                onChange:(e: any) => setPassword(e.target.value)
                            }}/>

                            <input type="submit" value="Submit" className="btn btn-info btn-block btn-auth-submit mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
