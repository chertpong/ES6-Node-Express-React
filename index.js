import express from 'express';
let app = express();
// Libraries
import bodyParser from 'body-parser';
// Routes
import route from './route';
// Config
import config from './config.js';
// Util
import path from 'path';
let configProfile = config.dev;

// Set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set route
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);


app.listen(configProfile.port, function () {
  console.log(`Server is running on port ${configProfile.port}`);
});
