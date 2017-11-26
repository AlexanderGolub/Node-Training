import {userMiddleware} from '../middleware';

function getAllUsers(req, res) {
  userMiddleware.getAllUsers(req, res);
}

function deleteUser(req, res) {
  userMiddleware.deleteUser(req, res);
}

export default {getAllUsers, deleteUser};
