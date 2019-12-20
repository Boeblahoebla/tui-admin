// Imports
//////////

// Express
const express = require('express');
const router = express.Router();

// Database model
const mongoose = require( 'mongoose');
const User = require('../../models/User');

// Security
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


// API requests
///////////////

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => {
    res.json({ msg: "Users works" });
});


// @route   post api/users/register
// @desc    Register users route
// @access  Public
router.post('/register', (req, res) => {
    // Validate the input of the req.body
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Find already registered email
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {

                let newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                });

                // Encrypt the password with a salt and hash and set the result
                // as the password for the new user
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        // Try to save the new user to the database
                        newUser
                            .save()
                            .then((user) => res.json(user))
                            .catch((err) => console.log(err));
                    });
                });
            }
        });
});


// @route   POST api/users/login
// @desc    Login users route -> Returns JSON web token
// @access  Public
router.post('/login', (req, res) => {
    // Validate the input of the req.body
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // find user by email;
    User.findOne({ email }).then(user => {
        if(!user) {
            errors.email = 'User is not found';
            return res.status(404).json(errors);
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
                // Create and return a JSON web token
                const payload = { id: user.id, name: user.name, avatar: user.avatar };

                // Sign the JWT
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({ succes: true, token: 'Bearer ' + token })
                });

            } else {
                errors.password = 'Password is incorrect';
                return res.status(400).json(errors);
            }
        })
    })
});

// @route   GET api/users/all
// @desc    Return current user
// @access  Public
router.get('/all', (req, res) => {

    // Get the query parameters
    const pageNo = parseInt(req.query.pageNo);
    const size = parseInt(req.query.size);

    // Create the skip & limit fields for use in mongoDb
    const skip = size * (pageNo - 1);

    // Set the query object for mongoDB
    const query = {
        skip: skip,
        limit: size
    };

    // initialise an empty errors object & the response
    let response = {};
    const errors = {};

    User.countDocuments((err, count) => {
        // Error handling
        if (err) {
            response = {
                "error": true,
                "data": "Problem while counting the records"
            };

            // Return the negative response to the client
            return res.status(500).json(response);
        }

        count > 0 &&
        User.find({}, {}, query)
            .then(users => {
                if (!users) {
                    errors.noProfile = 'There are no client profiles';
                    return res.status(404).json(errors)
                }

                response = {
                    "error": false,
                    "records": count,
                    "currentPage": pageNo,
                    "recordsPerPage": size,
                    "pages": Math.ceil(count / size),
                    "data": users
                };
                res.status(200).json(response);
            })
            .catch(error => res.status(500).json(error))
    });
});


// @route   DELETE api/users/delete:id
// @desc    Deletes a user by id
// @access  Private
router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    // Initialize an empty errors object
    let errors = {};

    // Determine if the logged in user is at least an employee
    User.findById(req.user.id)
        .then(user => {
            if (!user) {
                errors.noUser = 'There is no user by that id';
                return res.status(401).json(errors)
            }

            // Check to see if the id has been given
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
                errors.noIdGiven = "Given id is invalid";
                return res.status(400).json(errors)
            }

            // Check to see if the user removes its self
            if(req.params.id === req.user.id) {
                errors.removeSelf = "Can not remove yourself";
                return res.status(400).json(errors)
            }

            // Find the contact by id & remove it
            User.findOneAndRemove({_id: req.params.id})
                .then(contact => {
                    if (!contact) {
                        errors.noUsers = "There is no user by that id";
                        return res.status(404).json(errors)
                    }
                    return res.status(200).json(contact)
                })
                .catch(error => {
                    errors.removeFail = "There was a problem removing the user";
                    res.status(500).json(errors)
                })
        })
});


// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});


// Exports
//////////

module.exports = router;
