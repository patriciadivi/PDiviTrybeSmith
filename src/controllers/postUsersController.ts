import { Request, Response } from 'express';
import { IProducts } from '../interfaces/IProducts';
// import services from '../services/index';

const postUsersController = async (req: Request, res: Response) => {
  const users = req.body as IProducts;
  console.log(users);
  
  // const postUserServices = await services.postUserServices(user);
  // return res.status(201).json(postUserServices);
  return res.status(201).json({ message: 'ok' });
};

export default postUsersController;