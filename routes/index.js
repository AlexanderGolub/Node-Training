import express from 'express';
import products from './products';
import users from './users';
import {queryParser, cookieParser, securityMiddleware} from '../middleware';
import passport from 'passport';
import authRouter from './authRouter';

const router = express.Router();

router.get('/api/products', securityMiddleware.checkToken, queryParser, cookieParser, products.getAllProducts);
router.get('/api/products/:id', securityMiddleware.checkToken, queryParser, cookieParser, products.getProductById);
router.get('/api/products/:id/reviews', securityMiddleware.checkToken, queryParser, cookieParser, products.getReviewsById);
router.post('/api/products', securityMiddleware.checkToken, queryParser, cookieParser, products.addProduct);

router.get('/api/users', securityMiddleware.checkToken, queryParser, cookieParser, users.getAllUsers);

router.use('/auth', authRouter);

export default router;
