import { Router } from 'express';
import controllers from '../controllers/index';
// const userValidation = '../middlewares/requestLogin';
const user = Router();

user.post('/products', controllers.postProductsController);
// user.get('/products', controllers.getProductsController);

export default user;