/**
 * .
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chat= new Schema({
    itemId:{
        type:Schema.Types.objectId,
        ref:"item"
    },
    seller:{
        type:Schema.Types.objectId,
        ref:"user"
    },
    buyer:{
        type:Schema.Types.objectId,
        ref:"user"
    },
    talk:[{
        conversation:[String]
    }],
    status:Boolean
});

/*
add another schema here
 */
module.exports = mongoose.model('chat', chat);