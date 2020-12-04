require('./db/config');
const express = require('express')

const app = express(), 
 path = require('path'),
 cookieParser = require('cookie-parser'),
 passport = require('./middleware/authentication/index'),
 openRoutes = require('./routes/open/generalRoute'),
 writerRoutes = require('./routes/secure/writerRoute');

app.use(express.json());

//UNAUTH ROUTES
app.use(openRoutes)


//MIDDLEWARE
app.use(cookieParser());
app.use('/api/*', passport.authenticate('jwt', { session: false }));
app.use(writerRoutes)
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