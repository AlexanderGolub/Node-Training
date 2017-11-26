import models from '../modelsMongo';

function getAllProducts(req, res) {
  models.Product.find((err, products) => {
    res.json(products);
  });
}

function getProductById(req, res) {
  const productId = Number(req.params.id);
  models.Product.find({id: productId}, (err, products) => {
    res.json(products);
  });
}

function getReviewsById(req, res) {
  const productId = Number(req.params.id);
  models.Review.find({productId: productId}, (err, reviews) => {
    res.json(reviews);
  });
}

function addProduct(req, res) {
  const reqInfo = req.body;
  const productInfo = new models.Product(reqInfo);

  productInfo.lastModifiedDate = new Date();

  productInfo.save(() => {
    res.json(productInfo);
  });
}

function deleteProduct(req, res) {
  const productId = Number(req.params.id);
  
  models.Product.findOne({id: productId}).remove(() => {
    res.send('Deleted');
  });
}

export default {getAllProducts, getProductById, getReviewsById, addProduct, deleteProduct};
