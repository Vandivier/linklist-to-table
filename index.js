'use strict';

let fs = require('fs');
let axios = require('axios');
let sUrl = 'http://www.google.com';
let sInputFile = __dirname + '\links.txt';

console.log(sInputFile);
axios.get(sUrl)

.then(function (oResponse) {
    console.log(oResponse.data);   //todo: parse out the <title></title>
});
