var express = require('express');
var mongodb = require('mongodb');
var bodyparser = require('body-parser');
var path = require('path');

var ObjectID = mongodb.ObjectID;

var app = express();
app.use(bodyparser.json());

var db;

mongodb.MongoClient.connect('mongodb://localhost:27017/test',function(err,database)
{
     if(err)
     {
         console.log(err);
         process.exit(1);
     }

db= database;
console.log('database connecton ready');

var port= process.env.port | 3100 ;
app.listen(port,function(){      
      console.log("app is running on port",port);
});

var Address = require('./app/models/address');
var router =express.Router();
router.use(function(req, res, next) {   
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


router.get('/', function(req, res) {
    res.json({ message: 'welcome to our api!' });   
});
router.route('/address')

    // create a bear (accessed at POST http://localhost:3100/api/address)
    .post(function(req, res) {
        
        var address = new Address();      // create a new instance of the address model
        address.name = req.body.name;  // set the address name (comes from the request)

        // save the bear and check for errors
        address.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Address created!' });
        });
        
    });

app.use('/api',router);

});

