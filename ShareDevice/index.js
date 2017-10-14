var http = require('http'),
    fs = require("fs"),
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;


const config = require('./config/database');
mongoose.connect(config.database);

let db = mongoose.connection;

//Check connection
db.open('open', function() {
    console.log('Connection to MongoDB');
});

//Check db error
db.on('error', function(err) {
    console.log(err);
});


//mongoose.connect('mongodb://localhost/eqs');


var help = require("./modules/help/help.js"),
    users = require('./api/models/users.js'),

    items = require('./api/models/items.js'),
    item_trade = require('./api/models/items_trade.js'),
    location = require('./api/models/location.js'),
    item_driver = require('./api/models/driver.js');


app.set('port', (process.env.PORT || 3060));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var home = function(req, resp) {
    fs.readFile("./index.html", function(err, data) {
        resp.writeHeader(200, { "Content-Type": "text/html" });
        resp.write(data);
        resp.end();
    });
};
/* this section handle all api */
app.get("/", home);
var routes = require("./api/routes/app-routes.js");
routes(app);
/*
general routes and UI path
 */
app.get("/help", help.f1);
app.use(express.static(__dirname + '/public'));

/*
finally start the server
 */
app.listen(app.get('port'), function() {
    console.log('Server listening to port http://localhost:' + app.get('port'));
});