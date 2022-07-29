import { Router } from 'express';

import controllers from '../controllers/index';
// const userValidation = '../middlewares/requestLogin';

const products = Router();

products.post('/products', controllers.postProductsController);

export default  products;