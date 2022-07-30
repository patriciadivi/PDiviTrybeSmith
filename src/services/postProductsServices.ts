import { IProducts } from "../interfaces/IProducts";
import models from "../models/index";

const postProductsServices = async (products: IProducts) => {
    // console.log('>>>>> cheguei postProductsServices', name, amount);
    const postProductsModels = await models.postProductsModels(products)
    console.log('>>>>> postProductsModels', postProductsModels);
    return postProductsModels;
};

export default postProductsServices;