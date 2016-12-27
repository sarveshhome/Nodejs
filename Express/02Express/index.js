var express = require('express');
var app = express();

var path = __dirname + '/app/views/';
//console.log(path);

//app.get(path, callback [, callback ...])=>Routes HTTP GET requests to the specified path with the specified callback functions
app.get('/', function(req, res) {
    //res.sendFile(path [, options] [, fn]) =>Transfers the file at the given path. Sets the Content-Type response HTTP header field based on the filename’s extension.
    res.sendFile(path + 'index.html');
});

app.get('/home', function(req, res) {
    res.sendFile(path + 'index.html');
});

app.get('/about', function(req, res) {
    res.sendFile(path + 'about.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(path + 'contactus.html');
});

app.use('*', function(req, res) {
    res.sendFile(path + '404.html');
});

app.use(express.static(__dirname + '/node_modules'));

var port = process.env.port || 3500;

app.listen(port, function() {
    console.log('your application running on http://localhost:' + port);
});