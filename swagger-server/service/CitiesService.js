'use strict';

import models from '../../modelsMongo';
/**
 *
 * cityId Integer city id to delete
 * no response value expected for this operation
 **/
exports.citiesCityIdDELETE = function(cityId) {
  return new Promise(function(resolve, reject) {
    models.City.findOne({id: cityId}).remove(() => {
      resolve('Deleted');
    });
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
    models.City.findOne({id: cityId}, (err, city) => {
      if (!city) {
        let newBody = body;
        newBody.id = cityId;
        citiesPOST(newBody)
          .then(function (city) {
            resolve(city);
          });
      } else {
        for (let field in reqInfo) {
          city[field] = reqInfo[field];
        }
    
        city.lastModifiedDate = new Date();
    
        city.save(() => {
          resolve(city);
        });
      }
    });
  });
}


/**
 * Return all cities
 *
 * returns List
 **/
exports.citiesGET = function() {
  return new Promise(function(resolve, reject) {
    models.City.find((err, cities) => {
      resolve(cities);
    });
  });
}


/**
 *
 * body City new city info
 * returns City
 **/
exports.citiesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    const cityInfo = new models.City(body);
  
    cityInfo.lastModifiedDate = new Date();
  
    cityInfo.save(() => {
      resolve(cityInfo);
    });
  });
}

