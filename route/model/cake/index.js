import express from 'express';
let router = express.Router();
import { getAll, getById, create, update, destroy } from './../../template/restful';
import Cake from './cake';

export default router.get('/'            , getAll(Cake))
                     .get('/:id'         , getById(Cake))
                     .post('/'           , create(Cake))
                     .put('/:id'         , update(Cake))
                     .delete('/:id'      , destroy(Cake));
