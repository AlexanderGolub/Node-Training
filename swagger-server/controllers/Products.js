'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.productsGET = function productsGET (req, res, next) {
  Products.productsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsPOST = function productsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Products.productsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsProductIdDELETE = function productsProductIdDELETE (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.productsProductIdDELETE(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsProductIdGET = function productsProductIdGET (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.productsProductIdGET(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsProductIdReviewsGET = function productsProductIdReviewsGET (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.productsProductIdReviewsGET(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
