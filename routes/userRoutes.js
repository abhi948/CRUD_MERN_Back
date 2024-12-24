import express from 'express';

import { create, deleteUser, getUser, getUserById, update } from '../controller/userController.js';

const route = express.Router();

route.post('/user', create);
route.get('/userData', getUser);
route.get('/user/:id', getUserById);
route.put('/user/update/:id', update);
route.delete('/user/delete/:id', deleteUser);

export default route;