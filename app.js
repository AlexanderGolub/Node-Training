import appConfig from './config/app.json';
import {Product, User} from './models';

console.log(appConfig.appName);

const user = new User();
const product = new Product();
