'use strict';

let fs = require('fs');
var axios = require('axios');
let l2t = require('./lib/l2t.js');                             //ref: https://nodejs.org/api/modules.html

let sInputFile = __dirname + '\\links.txt';
let wsOut = fs.createWriteStream('./output.csv');              //todo: allow out as SQL. ref: https://docs.nodejitsu.com/articles/advanced/streams/how-to-use-fs-create-write-stream/
let rsInStream = fs.createReadStream(sInputFile)

console.log(sInputFile);
l2t.linkStreamFromList(rsInStream, wsOut);
console.log('Done.');
