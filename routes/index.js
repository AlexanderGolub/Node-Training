import express from 'express';
import products from './products';
import users from './users';
import {queryParser, cookieParser} from '../middleware';

const router = express.Router();

router.get('/api/products', queryParser, cookieParser, products.getAllProducts);
router.get('/api/products/:id', queryParser, cookieParser, products.getProductById);
router.get('/api/products/:id/reviews', queryParser, cookieParser, products.getReviewsById);
router.post('/api/products', queryParser, cookieParser, products.addProduct);

router.get('/api/users', queryParser, cookieParser, users.getAllUsers);

export default router;
