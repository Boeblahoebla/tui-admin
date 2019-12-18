// Imports
//////////

// Base dependencies
import React, { useState } from 'react';

// Components
import { TextFieldGroup } from "../../common/TextFieldGroup";


// Register component
/////////////////////
export const Register = () => {

    // State handling
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ password2, setPassword2 ] = useState("");


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
                        <h1 className="display-4 text-center auth__header">Sign Up</h1>
                        <p className="lead text-center auth_lead">
                            Register a user
                        </p>

                        <p className="auth__icon text-center mb-4"><i className="far fa-user fa-4x"/></p>

                        {/* On submit, fire up the onSubmit method */}
                        <form noValidate onSubmit={ onSubmitHandler }>

                            {/* Input textfields using the TextFieldGroup component */}
                            <TextFieldGroup tfProps={{
                                name:"name",
                                type:"text",
                                placeholder:"Username",
                                value: name,
                                onChange:(e:any) => setName(e.target.value),
                            }}/>

                            <TextFieldGroup tfProps={{
                                name:"email",
                                type:"email",
                                placeholder:"Email address",
                                value: email,
                                onChange:(e:any) => setEmail(e.target.value),
                            }}/>

                            <TextFieldGroup tfProps={{
                                name:"password",
                                type:"password",
                                placeholder:"Password",
                                value: password,
                                onChange:(e:any) => setPassword(e.target.value),
                            }}/>

                            <TextFieldGroup tfProps={{
                                name:"password2",
                                type:"password",
                                placeholder:"Repeat password",
                                value: password2,
                                onChange:(e:any) => setPassword2(e.target.value),
                            }}/>

                            <input type="submit" value="Register" className="btn btn-info btn-block btn-auth-submit mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
