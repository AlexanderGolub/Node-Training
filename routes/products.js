import {productMiddleware} from '../middleware';

function getAllProducts(req, res) {
  res.json(productMiddleware.getAllProducts());
}

function getProductById(req, res) {
  res.json(productMiddleware.getProductById(Number(req.params.id)));
}

function getReviewsById(req, res) {
  res.json(productMiddleware.getReviewsById(Number(req.params.id)));
}

function addProduct(req, res) {
  product.addProduct(req.body);
  res.json(req.body);
}

export default {getAllProducts, getProductById, getReviewsById, addProduct};
