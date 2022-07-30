import { Request, Response } from 'express';
import { IProducts } from '../interfaces/IProducts';
import services from '../services/index';

const postProductsController = async (req: Request, res: Response) => {
  const products = req.body as IProducts;
  const postProductsServices = await services.postProductsServices(products);
  return res.status(201).json(postProductsServices);
};

export default postProductsController;