import { Router } from 'express';
import controllers from '../controllers/index';

const orders = Router();

orders.post('/orders', controllers.postOrdersController);

export default orders;