var express = require('express');
var app = express();
var bodyParse = require('body-parser');

var port = process.env.port || 3100;

//routing API
var router = express.Router();

var fs = require('fs');
var pdf = require('html-pdf');
var options = { format: 'Letter' };

//register our routers
app.use('/pnr', router);
router.get('/', function(req, res) {
    //res.json({ "hello": "hi" });

});
router.route('/pnrpdf')
    .post(function(req, res) {
        const contentHTML = req.body.content;
        var fileNamePNR = './test/businesscard.pdf';
        var pathName = './test';
        /**
         * Pdf create code
         */
        pdf.create(contentHTML, options).toFile(fileNamePNR, function(err, res) {
            if (err) return console.log(err);
            console.log(res);
        });
        /**
         * pdf create code end
         */
        res.download(pathName, fileNamePNR);

    });

app.listen(port, function() {
    console.log('application running on the http://localhost:' + port);
});