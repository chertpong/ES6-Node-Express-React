import express from 'express';
import path from 'path';
let router = express.Router();

router.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname,'..','public','index.html'));
});




export default router;