import express from 'express';
let router = express.Router();

router.get('/', (req,res,next) => {
  res.send('Index');
});




export default router;