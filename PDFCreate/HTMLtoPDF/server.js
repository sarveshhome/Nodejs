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

router.get('/', function(req, res, next) {
    const contentHTML = req.body.content;
    var fileNamePNR = './test/PNR.pdf';
    var pathName = './test';
    pdf.create(contentHTML, options).toFile(fileNamePNR, function(err, res) {
        if (err) return console.log(err);
        console.log(res);
    });
    res.download(pathName, fileNamePNR);
});

app.listen(port, function() {
    console.log('application running on the http://localhost:' + port);
});