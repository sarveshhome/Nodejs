var mongoose = require('mongodb');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
       name:String
});

module.exports = mongoose.module('Address',AddressSchema);