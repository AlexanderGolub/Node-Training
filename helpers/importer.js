import fs from 'fs';

class Importer {
  constructor() {
  }

  import(path) {
    return new Promise((resolve, reject) => {
      let rawData = fs.readFileSync(path, 'utf8');
      let dataArray = rawData.split(/\r?\n/);
      resolve(JSON.stringify(dataArray));
    });
  }

  importSync(path) {
    let rawData = fs.readFileSync(path, 'utf8');
    let dataArray = rawData.split(/\r?\n/);
    return JSON.stringify(dataArray);
  }
}

export default Importer;
