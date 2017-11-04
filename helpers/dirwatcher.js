import {EventEmitter} from 'events';
import fs from 'fs';

class DirWatcher {
  constructor() {
  }

  watch(path, delay) {
    const eventEmitter = new EventEmitter();
    const files = {};

    setInterval(() => {
      this.markChangedFiles(path, files);
      let fileNames = Object.keys(files);

      fileNames.forEach((fileName) => {
        if (files[fileName].changed) {
          files[fileName].changed = false;
          eventEmitter.emit('dirwatcher:changed', `${path}/${fileName}`);
        }
      });
    }, delay);

    return eventEmitter;
  }

  markChangedFiles(path, files) {
    let fileNames = fs.readdirSync(path);

    fileNames.forEach((fileName) => {
      let file = files[fileName];
      let stats = fs.statSync(`${path}/${fileName}`);
      
      if (!file) {
        files[fileName] = {
          mtime: stats.mtime,
          changed: true
        };

        file = files[fileName];
      }

      if (stats.mtime.getTime() !== file.mtime.getTime()) {
        file.changed = true;
        file.mtime = stats.mtime;
      }
    });
  }
}

export default DirWatcher;
