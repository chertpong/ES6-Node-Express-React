import express from 'express';
let app = express();
// Libraries
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// Routes
import route from './route';
// Config
import config from './config.js';
let configProfile = config.dev;
// Util
import path from 'path';
import boot from './boot';

// Set data source
mongoose.connect(configProfile.datasource);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('[+] mongoose connected');
  // Set boot script
  boot();
});


// Set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set route
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);




app.listen(configProfile.port, function () {
  console.log(`Server is running on port ${configProfile.port}`);
});
