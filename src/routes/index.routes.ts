import { Router } from 'express';

import products from './products.routes';
import users from './users.routes';
import orders from './orders.routes';

const router = Router();

router.use(products);
router.use(users);
router.use(orders);

export default router;