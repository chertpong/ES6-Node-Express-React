import express from 'express';
let app = express();
import route from './route';

app.use('/', route);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
