import appConfig from './config/app.json';
import express from 'express';
import routes from './routes';

const app = express();
app.use('/', routes);

export default app;
