'use strict';

const fs = require('fs');
const through = require('through2');
const split = require('split');
const argv = require('minimist')(process.argv.slice(2));

function pipeToStdout(filePath) {
  const reader = fs.createReadStream(filePath);
  reader.pipe(process.stdout);
}

function convertToUpperCase() {
  function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
  }

  process.stdin.pipe(through(write))
              .pipe(process.stdout);
}

function csvToJsonConsole(filename) {
  function write(buffer, encoding, next) {
    this.push(JSON.stringify(buffer.toString()));
    next();
  }

  fs.createReadStream(filename)
    .pipe(split())
    .pipe(through(write))
    .pipe(process.stdout);
}

function csvToJsonFile(filename) {
  let writeIndex = 0;

  function write(buffer, encoding, next) {
    let chunkToWrite = JSON.stringify(buffer.toString());
    chunkToWrite = writeIndex === 0 ? `[${chunkToWrite}` : `,${chunkToWrite}`;
    this.push(chunkToWrite);
    writeIndex++;
    next();
  }

  function end(done) {
    this.push(']');
    done();
  }

  const newFilename = `${filename.split('.').slice(0, -1).join('.')}.json`;

  fs.createReadStream(filename)
    .pipe(split(null, null, { trailing: false }))
    .pipe(through(write, end))
    .pipe(fs.createWriteStream(newFilename));
}

function bundleCSS(path) {
  
}

function printHelpMessage() {
  console.log(`
    Usage: ./streams.js [options]

    Options:
      -a, --action      set action name to run
      -f, --file        file name to perform action on
      -h, --help        print usage message
      -p, --path        folder with css files to bundle
  `);
}

if (argv.help || argv.h) {
  printHelpMessage();
} else {
  const action = argv.action || argv.a;
  const filename = argv.file || argv.f;
  const path = argv.path || argv.p;

  switch (action) {
    case 'file-stdout':
      pipeToStdout(filename);
      break;
    case 'capitalise':
      convertToUpperCase();
      break;
    case 'print-file':
      csvToJsonConsole(filename);
      break;
    case 'transform-file':
      csvToJsonFile(filename);
      break;
    case 'bundle-css':
      bundleCSS(path);
      break;
    default:
      console.log('Error. Input valid command');
      printHelpMessage();
      break;
  }
}
