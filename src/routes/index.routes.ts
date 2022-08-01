import { Router } from 'express';

import products from './products.routes';
import user from './user.routes';

const router = Router();

router.use(products);
router.use(user);

export default router;