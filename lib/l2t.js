let axios = require('axios');

function handleOneLink (sUrl, wsOut) {
    axios.get(sUrl)
        
    .then(function (oResponse) {
        let cheerio = require('cheerio');
        let $ = cheerio.load(oResponse.data);
        let sTitle = $('title').text();

        wsOut.write('\n' + sUrl + ',' + sTitle);
    })

    .catch(function (error) {
        wsOut.write('\n' + sUrl + ',***ERROR OBTAINING URL***');
    });
}

module.exports = {
    handleOneLink: handleOneLink,

    linkStreamFromList(rsInStream, wsOut) {
        require('readline').createInterface({
            input: rsInStream
        })

        .on('line', function (line) {
            handleOneLink(line, wsOut);
        });
    }

}
