#!/usr/bin/env node

'use strict';

const fs = require('fs');
const minimist = require('minimist');
const through = require('through2');
const split = require('split');
const request = require('request');

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
    chunkToWrite = writeIndex === 0 ? `[${chunkToWrite}` : `,${chunkToWrite}`; // to create valid JSON file
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
  const fileNames = fs.readdirSync(path);
  const bundlePath = `${path}/bundle.css`;
  const EXTERNAL_SOURCE = `https://www.epam.com/etc/clientlibs/foundation/main.min.fc69c13add6eae57cd247a91c7e26a15.css`;

  fs.closeSync(fs.openSync(bundlePath, 'w'));

  fileNames.forEach((filename) => {
    fs.createReadStream(`${path}/${filename}`)
      .pipe(fs.createWriteStream(bundlePath, {flags: 'a'}));
  });

  request(EXTERNAL_SOURCE, function (err, response, body) {
    if (!err) {
      fs.appendFile(bundlePath, body);
    }
  });
}

function printHelpMessage() {
  console.log(`
    Usage: ./streams.js [options]
           streams [options]

    Options:
      -a, --action      set action name to run
      -f, --file        file name to perform action on
      -h, --help        print usage message
      -p, --path        folder with css files to bundle
  `);
}

function printErrorMessage() {
  console.log('Error. Input valid command');
  printHelpMessage();
}

function run() {
  const ARG_PARSER_CONFIG = {
    alias: {
      'action': 'a',
      'file': 'f',
      'help': 'h',
      'path': 'p'
    }
  };
  const argv = minimist(process.argv.slice(2), ARG_PARSER_CONFIG);
  const firstArgument = Object.keys(argv)[1];

  if (firstArgument === 'help' || firstArgument === 'h') {
    printHelpMessage();
  } else {
    const action = argv.action;
    const filename = argv.file;
    const path = argv.path;
  
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
        printErrorMessage();
        break;
    }
  }
}

if (module.parent) {
  exports.streamsUtility = {pipeToStdout, convertToUpperCase, csvToJsonConsole, csvToJsonFile, bundleCSS};
} else {
  run();
}
