import { AllOrders } from '../interfaces/AllOrders';
import connection from './connection';

const getOrdersModels = async (): Promise<AllOrders[] | null > => {
  const query = `
  SELECT Trybesmith.Orders.id,
  Trybesmith.Orders.userId as userId,
  JSON_ARRAYAGG(Trybesmith.Products.id) as productsIds
  FROM Trybesmith.Orders as Orders 
  INNER JOIN Trybesmith.Products as Products
  ON Trybesmith.Orders.id = Trybesmith.Products.orderId
  GROUP BY Trybesmith.Orders.id
  ORDER BY Trybesmith.Orders.userId;
  `;
  const [result] = await connection.execute(query);
  console.log(result);
  
  return result as AllOrders[];
};

export default getOrdersModels;