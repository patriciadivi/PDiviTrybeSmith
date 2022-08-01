import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IToken } from '../interfaces/IToken';

dotenv.config();

const tokenGenerate = (data: IToken) => {
  const { id, username, classe, level } = data;
  const newUser = { id, username, classe, level };
  const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET || 'secret2694Divi', {
    expiresIn: '365d',
    algorithm: 'HS256',
  });
  return token;
};

export default tokenGenerate;