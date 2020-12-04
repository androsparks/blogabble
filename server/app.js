const app = express();

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