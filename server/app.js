require('./db/config');
const express = require('express')

const app = express(), 
 path = require('path'),
 cookieParser = require('cookie-parser'),
 passport = require('./middleware/authentication/index'),
 openRoutes = require('./routes/open/generalRoute'),
 postRoutes = require('./routes/secure/postsRoute'),
 writerRoutes = require('./routes/secure/writerRoute'),
 fileUpload = require('express-fileupload')

app.use(express.json());

//UNAUTH ROUTES
app.use(openRoutes)
//MIDDLEWARE
app.use(cookieParser());

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/images'
})
)

app.use('/api/*', passport.authenticate('jwt', { session: false }));

app.use(writerRoutes)
app.use(postRoutes)

//AUTH ROUTES 
if (process.env.NODE_ENV === 'production') {
    app.get('*', (request, response) => {
      response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  module.exports = app;