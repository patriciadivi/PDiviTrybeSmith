import { Request , Response } from "express";
const postProductsController = (_req: Request, res: Response): Response => {
   return res.status(200).json({ message: 'postProductsController' });
};

export default postProductsController;