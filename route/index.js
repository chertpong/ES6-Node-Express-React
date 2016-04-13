import express from 'express';
import path from 'path';
let router = express.Router();
// Routes
import CakeRoute from './model/cake';

router.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname,'..','public','index.html'));
});

router.use('/api/cakes', CakeRoute);



export default router;