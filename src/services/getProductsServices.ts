import models from '../models/index';

const getProductsServices = async () => {
  const getProductsModels = await models.getProductsModels();
  return getProductsModels;
};

export default getProductsServices;