import express from 'express';
import {securityMiddleware} from '../middleware';
import { SECRET } from '../config/securityConfig';
import passport from 'passport';

const authRouter = express.Router();

authRouter.post('/', securityMiddleware.signIn);

authRouter.post('/local', passport.authenticate('local', { session: false }), (req, res) => {
  if (req.isAuthenticated()) {
    const { userInfo } = req;
    const payload = { userId: userInfo.id };
    const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });

    res.send({
      code: 200,
      message: 'OK',
      data: {
        user: {
          email: userInfo.email,
          name: userInfo.name
        }
      },
      token: token
    });
  }
});

authRouter.get('/facebook', passport.authenticate('facebook'));

const facebookAuthCheck = passport.authenticate('facebook', {
  failureRedirect: '/login',
  session: false
});

authRouter.get('/facebook/callback', facebookAuthCheck, (req, res) => {
  res.status(200).json(req.user);
});

authRouter.get('/twitter', passport.authenticate('twitter'));

const twitterAuthCheck = passport.authenticate('twitter', {
  failureRedirect: '/login',
  session: false
});

authRouter.get('/twitter/callback', twitterAuthCheck, (req, res) => {
  res.status(200).json(req.user);
});

authRouter.get('/google', passport.authenticate('google', { scope: ['profile'] }));

const googoleAuthCheck = passport.authenticate('google', {
  failureRedirect: '/login',
  session: false
});

authRouter.get('/google/callback', googoleAuthCheck, (req, res) => {
  res.status(200).json(req.user);
});

export default authRouter;
