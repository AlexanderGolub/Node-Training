'use strict';


/**
 * Return all users
 *
 * returns List
 **/
exports.usersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "wizard777",
  "name" : "The Bad",
  "id" : 3535,
  "login" : "DarkStalker666",
  "email" : "darkstalker@gmail.com"
}, {
  "password" : "wizard777",
  "name" : "The Bad",
  "id" : 3535,
  "login" : "DarkStalker666",
  "email" : "darkstalker@gmail.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * userId Integer user id to delete
 * no response value expected for this operation
 **/
exports.usersUserIdDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

