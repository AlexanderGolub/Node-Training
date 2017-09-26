import appConfig from './config/app.json';
import {Product, User} from './models';
import {Importer, DirWatcher} from './services';

console.log(appConfig.appName);

const user = new User();
const product = new Product();

const importer = new Importer();
const dirWatcher = new DirWatcher();

const dataWatcher = dirWatcher.watch('./data', 3000);

dataWatcher.on('dirwatcher:changed', (path) => {
  importer.import(path);
});
