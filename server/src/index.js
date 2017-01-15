
var express    = require('express');
var bodyParser = require('body-parser');
var serverConfig = require('./config');
var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

var api        = require('./routes');
app            = express();

// MongoDB Connection
mongoose.connect(serverConfig.dbUrl, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

app.listen(serverConfig.port);
