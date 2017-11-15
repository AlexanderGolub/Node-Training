import appConfig from './config/app.json';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import passport from './passport-setup';
import session from 'express-session';
import {SECRET} from './config/securityConfig';

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: SECRET }));
app.use(passport.initialize());
app.use('/', routes);

export default app;
