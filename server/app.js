require('./db/config');
const express = require('express')
const app = express(), path = require('path');

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  if (process.env.NODE_ENV === 'production') {
    app.get('*', (request, response) => {
      response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
  
  module.exports = app;