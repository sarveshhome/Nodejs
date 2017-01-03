var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AddressSchema   = new Schema({
    name: String
},{versionKey:false});

module.exports = mongoose.model('Address', AddressSchema);