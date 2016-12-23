var express = require('express');
var app = express();

var expressvar = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Express - Node.js web application framework');
};
app.use(expressvar);

app.set('port', process.env.PORT || 3001);
var server = app.listen(3001, function() {
    var port = server.address().port;
    console.log("Example app listening at http://localhost:", port);
});