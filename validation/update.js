// Imports
//////////

const Validator = require('validator');
const isEmpty = require('./is-empty');


// Exports
//////////

module.exports = function validateRegisterInput(data) {
    // Create an empty errors object
    let errors = {};

    // Treat the fields to be validated as an empty string when not filled in
    data.name = !isEmpty(data.name) ? data.name : '';

    // Fill the errors object according to the following rules for registration input

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name is required';
    }

    // Return errors object and validation boolean
    return {
        errors,
        isValid: isEmpty(errors)
    }
};