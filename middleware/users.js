import {User} from '../models';

const UserModel = new User();

function getAllUsers() {
  return UserModel.getUsers();
}

export default {getAllUsers};
