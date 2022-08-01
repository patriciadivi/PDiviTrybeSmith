import { Router } from 'express';
import controllers from '../controllers/index';

const orders = Router();

orders.get('/orders', controllers.getOrdersController);

export default orders;