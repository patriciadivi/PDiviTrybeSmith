import { ResultSetHeader } from "mysql2";
import { IProducts } from '../interfaces/IProducts';
import connection from './connection';

const postProductsModels = async (products: IProducts): Promise<IProducts> => {
    const { name, amount } = products;

    const query = 'INSERT INTO Trybesmith.Products(name, amount) VALUES(?, ?)';
    const values = [name, amount];

    const [result] = await connection.execute<ResultSetHeader>(query, values);
    const { insertId: id  } = result;

    const newProduct: IProducts = { id, name , amount };
    return newProduct;

};

export default postProductsModels;