import express from 'express';
import products from './products';
import users from './users';
import cities from './cities';
import {queryParser, cookieParser, securityMiddleware} from '../middleware';
import passport from 'passport';
import authRouter from './authRouter';

const router = express.Router();

router.get('/api/products', securityMiddleware.checkToken, queryParser, cookieParser, products.getAllProducts);
router.get('/api/products/:id', securityMiddleware.checkToken, queryParser, cookieParser, products.getProductById);
router.get('/api/products/:id/reviews', securityMiddleware.checkToken, queryParser, cookieParser, products.getReviewsById);
router.post('/api/products', securityMiddleware.checkToken, queryParser, cookieParser, products.addProduct);
router.delete('/api/products/:id', securityMiddleware.checkToken, queryParser, cookieParser, products.deleteProduct);

router.get('/api/users', securityMiddleware.checkToken, queryParser, cookieParser, users.getAllUsers);
router.delete('/api/users/:id', securityMiddleware.checkToken, queryParser, cookieParser, users.deleteUser);

router.get('/api/cities', queryParser, cookieParser, cities.getAllCities);
router.post('/api/cities', queryParser, cookieParser, cities.createCityInfo);
router.put('/api/cities/:id', queryParser, cookieParser, cities.updateCityInfo);
router.delete('/api/cities/:id', queryParser, cookieParser, cities.deleteCityInfo);

router.use('/auth', authRouter);

export default router;
