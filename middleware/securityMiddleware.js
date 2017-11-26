import jwt from 'jsonwebtoken';
import {UserModel} from '../models';
import {SECRET} from '../config/securityConfig';
import models from '../modelsMongo';

function signIn(req, res) {
  const {login, password} = req.body;

  models.User.findOne({
    login: login,
    password: password
  }, (err, userInfo) => {
    if (!userInfo) {
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
  });
}

function checkToken(req, res, next) {
  const token = req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) {
        res.status(403).send({code: 403, message: 'Token Not Verified'});
      } else {
        req.decodedToken = decoded;
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
