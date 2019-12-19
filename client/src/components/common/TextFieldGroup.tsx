// Imports
//////////

// Base dependencies
import React from 'react';
import classnames from 'classnames';

// Typescript type
import { textFieldPropTypes } from "../../ts-types/textFieldPropTypes";


// Typing
/////////

// Prop types for the textField props
type textFieldProps = {
    tfProps: textFieldPropTypes;
}


// TextFieldGroup Component
///////////////////////////

export const TextFieldGroup = ( props:textFieldProps) => {

    // Fetch the fields from the tfProps
    const { name, placeholder, value, error, info, onChange, type } = props.tfProps;

    return (
        <div className="form-group">

            {/* CSS input field */}
            <input
                className={ classnames('form-control form-control-lg form-control-auth', {
                    'is-invalid': error
                }) }
                placeholder={ placeholder }
                name={ name }
                type={ type }
                onChange={ onChange }
                value={ value }
            />

            { info && (<small className="form-text text-muted">{ info }</small>) }

            {/* provide the error messages under the input that is not validated */}
            { error && (<div className="invalid-feedback">{ error }</div>) }
        </div>
    )
};