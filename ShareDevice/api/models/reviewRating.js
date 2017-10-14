/**
 * .
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewRating= new Schema({
    itemId:{
        type:Schema.Types.objectId,
        ref:"item"
    },
    userId:{
        type:Schema.Types.objectId,
        ref:"user"
    },
    rating:Number,
    review:String,
    status:Boolean
});

/*
add another schema here
 */
module.exports = mongoose.model('reviewRating', reviewRating);