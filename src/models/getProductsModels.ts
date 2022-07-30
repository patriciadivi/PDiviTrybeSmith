// import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { AllProducts } from '../interfaces/AllProducts';

const getProductsModels = async (): Promise<AllProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute(query);
  return result as AllProducts[];
};

export default getProductsModels;