var mongoose = require('mongoose');

module.exports = mongoose.model('Book',{
    text:String,
    done:Boolean
});