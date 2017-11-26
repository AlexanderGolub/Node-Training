import {productMiddleware} from '../middleware';

function getAllProducts(req, res) {
  productMiddleware.getAllProducts()
                  .then(data => res.json(data))
                  .catch(err => res.send(err));
}

function getProductById(req, res) {
  productMiddleware.getProductById(Number(req.params.id))
                  .then(data => res.json(data))
                  .catch(err => res.send(err));
}

function getReviewsById(req, res) {
  productMiddleware.getReviewsById(Number(req.params.id))
                  .then(data => res.json(data))
                  .catch(err => res.send(err));
}

function addProduct(req, res) {
  productMiddleware.addProduct(req.body)
                  .then(data => res.json(data))
                  .catch(err => res.send(err));
}

export default {getAllProducts, getProductById, getReviewsById, addProduct};
