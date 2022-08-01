import { Request, Response } from 'express';
import services from '../services/index';

const getOrdersController = async (_req: Request, res: Response) => {
  const getOrdersServices = await services.getOrdersServices();
  return res.status(200).json(getOrdersServices);
};

export default getOrdersController;