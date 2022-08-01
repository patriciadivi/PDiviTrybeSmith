import { IUser } from '../interfaces/IUser';
import models from '../models/index';

const postUsersServices = async (users: IUser) => {
  const postUsersModels = await models.postUsersModels(users);
  return postUsersModels;
};

export default postUsersServices;