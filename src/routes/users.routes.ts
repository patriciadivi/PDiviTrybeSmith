import { Router } from 'express';
import controllers from '../controllers/index';
// const userValidation = '../middlewares/requestLogin';
const users = Router();

users.post('/users', controllers.postUsersController);
// user.get('/products', controllers.getProductsController);

export default users;