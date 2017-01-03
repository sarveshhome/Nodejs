var express = require('express');
var bodyparser = require('body-parser');
var mongoose   = require('mongoose');
var Address = require('./app/models/address');
var ObjectID = mongoose.ObjectID;

var app = express();
var router =express.Router();
app.use(bodyparser.json());

var db;

mongoose.connect('mongodb://localhost:27017/testDb',function(err,database)
{
     if(err)
     {
         console.log(err);
         process.exit(1);
     }

db= database;
console.log('database connecton ready');

var port= process.env.port | 3200 ;
app.listen(port,function(){      
      console.log("app is running on port",port);
});


router.use(function(req, res, next) {   
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


router.get('/', function(req, res) {
    res.json({ message: 'welcome to our api!' });   
});
router.route('/address')
    // create a address (accessed at POST http://localhost:3200/api/address)
    .post(function(req, res) {        
        var address = new Address();      // create a new instance of the address model
        address.name = req.body.name;  // set the address name (comes from the request)

        // save and check for errors
        address.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Address created!' });
        });
        
    })
    .get(function(req,res){
        Address.find(function(err,address){
            if(err)
               res.send(err);
            
            res.json(address);
        })
    });

router.route('/address/:address_id')
      .get(function(req,res){
          Address.findById(req.params.address_id,function(err,address){
              if(err)
                 res.send(err);
            
              res.json(address);
          })
      })
      .put(function(req,res){
          Address.findById(req.params.address_id,function(err,address){
                if(err)
                   res.send(err);
                address.name = req.body.name;                
                //save
                address.save(function(err){
                        if(err)
                          res.send(err);                        
                        res.json({message: "name updated"});
                });
          });
      })
      .delete(function(req,res){
          Address.remove({
              _id : req.params.address_id
          },function(err,address){
                if(err)
                 res.send(err);
                res.json({message :"Successful delete"});
          });
      })


app.use('/api',router);

});

