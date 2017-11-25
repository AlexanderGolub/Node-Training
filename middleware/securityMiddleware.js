import jwt from 'jsonwebtoken';
import {UserModel} from '../models';
import {SECRET} from '../config/securityConfig';

function signIn(req, res) {
  const usersList = UserModel.getUsers();
  const {login, password} = req.body;

  const userInfo = usersList.find(user => login === user.login);

  if (!userInfo || userInfo.password !== password) {
    res.status(403).send({code: 404, message: 'User Not Found'});
  } else {
    const payload = { userId: userInfo.id };
    const token = jwt.sign(payload, SECRET, {expiresIn: '1h'});

    res.send({
      code: 200,
      message: 'OK',
      data: {
        user: {
          email: userInfo.email,
          name: userInfo.name
        }
      },
      token: token
    });
  }
}

function checkToken(req, res, next) {
  console.log(SECRET);
  const token = req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) {
        res.status(403).send({code: 403, message: 'Token Not Verified'});
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({code: 403, message: 'No Token Present'});
  }
}

export default {
  signIn,
  checkToken
};
