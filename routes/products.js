import {productMiddleware} from '../middleware';

function getAllProducts(req, res) {
  productMiddleware.getAllProducts(req, res);
}

function getProductById(req, res) {
  productMiddleware.getProductById(req, res);
}

function getReviewsById(req, res) {
  productMiddleware.getReviewsById(req, res);
}

function addProduct(req, res) {
  productMiddleware.addProduct(req, res);
}

function deleteProduct(req, res) {
  productMiddleware.deleteProduct(req, res);
}

export default {getAllProducts, getProductById, getReviewsById, addProduct, deleteProduct};
