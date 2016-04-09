import express from 'express';
let app = express();
// Libraries
import bodyParser from 'body-parser';
// Routes
import route from './route';
// Config
import config from './config.js';

let configProfile = config.dev;

// Set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

// Set route
app.use('/', route);


app.listen(configProfile.port, function () {
  console.log(`Server is running on port ${configProfile.port}`);
});
