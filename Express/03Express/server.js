var express = require('express');
var app = express();
var bodyParse = require('body-parser');

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

var port = process.env.port || 3100;

//routing API
var router =express.Router();
router.get('/',function(req,res){
    res.json({message:'Wecome to API'});
});

//register our routers
app.use('/api',router);

app.listen(port,function(){
    console.log('application running on the http://localhost:'+port);
})
