import models from '../models';

function getAllUsers() {
  return models.User.findAll({});
}

export default {getAllUsers};
