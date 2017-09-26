class Importer {
  constructor() {
    console.log('importer');
  }

  import(path) {
    console.log('import ' + path);
  }

  importSync(path) {
    console.log('import ' + path);
  }
}

export default Importer;
