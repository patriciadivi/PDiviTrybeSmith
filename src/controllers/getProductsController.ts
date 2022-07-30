import { Request, Response } from 'express';
import services from '../services/index';

const getProductsController = async (_req: Request, res: Response) => {
  const getProductsServices = await services.getProductsServices();
  return res.status(200).json(getProductsServices);
};

export default getProductsController;
