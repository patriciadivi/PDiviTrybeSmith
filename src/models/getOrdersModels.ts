import connection from './connection';
import { AllProducts } from '../interfaces/AllProducts';

const getOrdersModels = async (): Promise<AllProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.Orders';
  const [result] = await connection.execute(query);
  return result as AllProducts[];
};

export default getOrdersModels;