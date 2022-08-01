import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/IUser';
import connection from './connection';
import tokenGenerate from '../utils/tokenGenerate';

const postUsersModels = async (users: IUser) => {
  const { username, classe, level, password } = users;

  const query = `INSERT INTO Trybesmith.Users(username, classe, level, password)
  VALUES(?, ?, ?, ?)`;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: IUser = { id, username, classe, level };
  const token = tokenGenerate(newUser);
  console.log(token);
  
  return token;
};

export default postUsersModels;