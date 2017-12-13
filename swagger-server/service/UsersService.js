'use strict';

import models from '../../modelsMongo';
/**
 * Return all users
 *
 * returns List
 **/
exports.usersGET = function() {
  return new Promise(function(resolve, reject) {
    models.User.find((err, users) => {
      resolve(users);
    });
  });
}


/**
 *
 * userId Integer user id to delete
 * no response value expected for this operation
 **/
exports.usersUserIdDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    models.User.findOne({id: userId}).remove(() => {
      resolve('Deleted');
    });
  });
}

