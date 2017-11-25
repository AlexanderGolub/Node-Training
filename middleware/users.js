import {UserModel} from '../models';

function getAllUsers() {
  return UserModel.getUsers();
}

export default {getAllUsers};
