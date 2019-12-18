// Imports
//////////

// Express
const express = require('express');
const app = express();

// Security
const passport = require('passport');

// Dabatase related
const mongoose = require('mongoose');

// API Routes
const usersRoute = require('./routes/api/users');

// Middleware, utils & logging
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');


// Environment variables
////////////////////////
const dotenv = require('dotenv');
dotenv.config();


// Database connectivity
////////////////////////

const db = "mongodb+srv://tuiAdmin:Sh6foQvv2YH5yntI@cluster0-pyvmj.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Problem connecting to mongodb: ', err));


// Middleware
/////////////

// forms & parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Logging
app.use(morgan('tiny'));

// Authentication & Passport Config (strategy)
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use('/api/users', usersRoute);

// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


// Server initialisation
////////////////////////

const port = process.env.REACT_APP_NODEPORT || 5000;
app.listen(port, () => console.log(`Listening on port ${process.env.REACT_APP_NODEPORT}`));
