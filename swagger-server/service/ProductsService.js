'use strict';

import models from '../../modelsMongo';
/**
 * Return all products
 *
 * returns List
 **/
exports.productsGET = function() {
  return new Promise(function(resolve, reject) {
    models.Product.find((err, products) => {
      resolve(products);
    });
  });
}


/**
 * Save new product
 *
 * body Product new product info
 * returns Product
 **/
exports.productsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    const productInfo = new models.Product(body);
    
    productInfo.lastModifiedDate = new Date();
  
    productInfo.save(() => {
      resolve(productInfo);
    });
  });
}


/**
 * Delete product by id
 *
 * productId Integer product id to delete
 * no response value expected for this operation
 **/
exports.productsProductIdDELETE = function(productId) {
  return new Promise(function(resolve, reject) {
    models.Product.findOne({id: productId}).remove(() => {
      resolve('Deleted');
    });
  });
}


/**
 * Return product by id
 *
 * productId Integer product id to return
 * returns Product
 **/
exports.productsProductIdGET = function(productId) {
  return new Promise(function(resolve, reject) {
    models.Product.findOne({id: productId}, (err, product) => {
      resolve(product);
    });
  });
}


/**
 * Return product reviews by id
 *
 * productId Integer product id to return reviews for
 * returns ProductReviews
 **/
exports.productsProductIdReviewsGET = function(productId) {
  return new Promise(function(resolve, reject) {
    models.Review.find({productId: productId}, (err, reviews) => {
      resolve(reviews);
    });
  });
}

