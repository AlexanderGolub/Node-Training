import {userMiddleware} from '../middleware';

function getAllUsers(req, res) {
  res.json(userMiddleware.getAllUsers());
}

export default {getAllUsers};
