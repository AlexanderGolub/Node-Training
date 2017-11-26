import {userMiddleware} from '../middleware';

function getAllUsers(req, res) {
  userMiddleware.getAllUsers()
                .then(data => res.json(data))
                .catch(err => res.send(err));
}

export default {getAllUsers};
