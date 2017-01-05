var Book = require('./model/bookmodel.js');

module.exports = function(app){
        //get all book
        app.get('/api/book',function(req,res){
                Book.find(function(err,book){
                      if(err)
                        res.send(err);
                      res.json(book);
                });
        });
        //post and get boook
        app.post('/api/book',function(req,res){
            Book.create({
                text:req.body.text,
                done:false
            },function(err,book){
                    if(err)
                    res.send(err);

                Book.find(function(err,book){
                        if(err)
                           res.send(err);

                           res.json(book);
                });
            });
        });
        //delete book
        app.delete('/api/book/:book_id',function(req,res){
            Book.remove({
                _id:req.params.book_id
            },function(err,book){
                    if(err)
                    res.send(err);

                   Book.find(function(err,book){
                        if(err)
                           res.send(err);

                           res.json(book);
                });
            });
        }); 

        //call the application

        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); 
        });  
}
