import models from '../models/index';

const getOrdersServices = async () => {
  const getOrdersModels = await models.getOrdersModels();
  return getOrdersModels;
};

export default getOrdersServices;