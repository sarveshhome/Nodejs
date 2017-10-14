/**
 * .
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var item = new Schema({
    itemId:String,
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    name:String,
    desc:String,
    img:[{
        imgType:String,
        url:String
    }],
    specification:String,
    locationId: {
        type:Schema.Types.ObjectId,
        ref:"location"
    },
    last_updated: {
        type: Date,
        default:Date.now
    },
    status:Boolean
});

/*
add another schema here
 */
module.exports = mongoose.model('item', item);