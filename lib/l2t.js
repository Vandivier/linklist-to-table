module.exports = {
    handleOneLink: function(sUrl) {
        axios.get(sUrl).then(function (oResponse) {
            let cheerio = require('cheerio');
            let $ = cheerio.load(oResponse.data);
            let sTitle = $('title').text();

            wsOut.write(sUrl + ',' + sTitle);
        });
    }
}


/*
    exports.handleOneLink = function(sUrl) {
        axios.get(sUrl).then(function (oResponse) {
            let cheerio = require('cheerio');
            let $ = cheerio.load(oResponse.data);
            let sTitle = $('title').text();

            wsOut.write(sUrl + ',' + sTitle);
        });
    }

*/