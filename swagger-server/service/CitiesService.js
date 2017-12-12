'use strict';


/**
 *
 * cityId Integer city id to delete
 * no response value expected for this operation
 **/
exports.citiesCityIdDELETE = function(cityId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * cityId Integer id of city to update data
 * body City updated city info (optional)
 * returns City
 **/
exports.citiesCityIdPUT = function(cityId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Belarus",
  "capital" : true,
  "name" : "Minsk",
  "location" : {
    "lat" : "-40.88",
    "long" : "120.17"
  },
  "id" : 3535
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return all cities
 *
 * returns List
 **/
exports.citiesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "Belarus",
  "capital" : true,
  "name" : "Minsk",
  "location" : {
    "lat" : "-40.88",
    "long" : "120.17"
  },
  "id" : 3535
}, {
  "country" : "Belarus",
  "capital" : true,
  "name" : "Minsk",
  "location" : {
    "lat" : "-40.88",
    "long" : "120.17"
  },
  "id" : 3535
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
 * body City new city info
 * returns City
 **/
exports.citiesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Belarus",
  "capital" : true,
  "name" : "Minsk",
  "location" : {
    "lat" : "-40.88",
    "long" : "120.17"
  },
  "id" : 3535
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

