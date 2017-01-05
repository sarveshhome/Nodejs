var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3400;
var database = require('./config/database');


var bodyparse = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');

mongoose.connect(database.url);
app.use(express.static(__dirname + '/public'));
app.use(morgan('something done in server'));
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());
app.use(bodyparse.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

require('./app/routes.js')(app);
// app.get('*', function(req, res) {
//         res.sendfile('./public/index.html'); 
// });
app.listen(port,function(){
    console.log('app is running on http://localhost:'+port);
})
