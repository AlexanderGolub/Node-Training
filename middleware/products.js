import models from '../models';

function getAllProducts() {
  return models.Product.findAll({});
}

function getProductById(productId) {
  return models.Product.find({
    where: {
      id: productId
    }
  });
}

function getReviewsById(reviewId) {
  return Promise.resolve('Not implemented');
}

function addProduct(product) {
  return models.Product.create({
    name: product.name,
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

export default {getAllProducts, getProductById, getReviewsById, addProduct};
