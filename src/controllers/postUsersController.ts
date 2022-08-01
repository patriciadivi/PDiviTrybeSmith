import { Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import services from '../services/index';

const postUsersController = async (req: Request, res: Response) => {
  const users = req.body as IUser;
  
  const postUserServices = await services.postUsersServices(users);
  console.log('postUserServices', postUserServices);
  // return res.status(201).json(postUserServices);
  return res.status(201).json({ message: 'ok' });
};

export default postUsersController;