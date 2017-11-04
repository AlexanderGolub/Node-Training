import {Product} from '../models';

const ProductModel = new Product();

function getAllProducts() {
  return ProductModel.getProducts();
}

function getProductById(productId) {
  return ProductModel.getProducts().find(product => product.id === productId);
}

function getReviewsById(reviewId) {
  return ProductModel.getReviews().find(review => review.productId === reviewId);
}

function addProduct(product) {
  return ProductModel.addProduct(product);
}

export default {getAllProducts, getProductById, getReviewsById, addProduct};
