import { IProducts } from '../interfaces/IProducts';
import models from '../models/index';

const postProductsServices = async (products: IProducts) => {
  const postProductsModels = await models.postProductsModels(products);
  return postProductsModels;
};

export default postProductsServices;