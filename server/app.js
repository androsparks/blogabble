require('./db/config');
const express = require('express')

const app = express(), 
 path = require('path'),
 cookieParser = require('cookie-parser'),
 passport = require('./middleware/authentication/index');

app.use(express.json());

//UNAUTH ROUTES

//MIDDLEWARE
app.use(cookieParser());
app.use('/api/*', passport.authenticate('jwt', { session: false }));

//AUTH ROUTES 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  if (process.env.NODE_ENV === 'production') {
    app.get('*', (request, response) => {
      response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
  
  module.exports = app;