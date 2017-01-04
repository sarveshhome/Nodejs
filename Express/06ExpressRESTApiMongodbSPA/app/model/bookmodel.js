var mongoose = require('mongoose');

model.exports = mongoose.model('Book',{
    text:String,
    done:Boolean
})