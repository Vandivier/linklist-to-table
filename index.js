'use strict';

let fs = require('fs');
let axios = require('axios');
let l2t = require('./lib/l2t.js');                             //ref: https://nodejs.org/api/modules.html

let sUrl = 'http://www.google.com';
let sInputFile = __dirname + '\\links.txt';
let wsOut = fs.createWriteStream('./output.csv');       //todo: allow out as SQL. ref: https://docs.nodejitsu.com/articles/advanced/streams/how-to-use-fs-create-write-stream/

console.log(sInputFile);

l2t.handleOneLink(sUrl);

console.log('done.');
