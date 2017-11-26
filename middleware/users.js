import models from '../modelsMongo';

function getAllUsers(req, res) {
  models.User.find((err, users) => {
    res.json(users);
  });
}

function deleteUser(req, res) {
  const userId = Number(req.params.id);
  
  models.User.findOne({id: userId}).remove(() => {
    res.send('Deleted');
  });
}

export default {getAllUsers, deleteUser};
