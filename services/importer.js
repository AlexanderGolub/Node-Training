import fs from 'fs';

class Importer {
  constructor() {
  }

  import(path) {
    let rawData = fs.readFileSync(path, 'utf8');
    let dataArray = rawData.split(/\r?\n/);
    return Promise.resolve(dataArray);
  }

  importSync(path) {
    let rawData = fs.readFileSync(path, 'utf8');
    let dataArray = rawData.split(/\r?\n/);
    return JSON.stringify(dataArray);
  }
}

export default Importer;
