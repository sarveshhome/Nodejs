//express module call 
var express = require('express');
var app = express();


//title define on web page
app.locals.title = "My Exressjs first program";
app.set('title', 'My Exressjs first program');


//Print in Web page
app.get('/', function(req, res) {
    res.send('My Exressjs first program!');
});

app.get('/about', function(req, res) {
    res.send('about my page!');
});



//port define
var port = process.env.port || 3100;
app.listen(port, function() {
    console.log('App listening on port http://localhost:' + port);
});