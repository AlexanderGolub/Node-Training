'use strict';


/**
 * Return all products
 *
 * returns List
 **/
exports.productsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Purple Shirt",
  "id" : 3452
}, {
  "name" : "Purple Shirt",
  "id" : 3452
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = {
  "name" : "Purple Shirt",
  "id" : 3452
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
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
    var examples = {};
    examples['application/json'] = {
  "name" : "Purple Shirt",
  "id" : 3452
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = {
  "productId" : 3452,
  "reviews" : [ {
    "review" : "Such a great product",
    "userId" : 3535
  }, {
    "review" : "Such a great product",
    "userId" : 3535
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

