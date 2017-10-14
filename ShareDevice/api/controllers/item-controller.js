'use strict';
var mongoose = require('mongoose'),
    Item = mongoose.model('item');

exports.list_all_items = function(req, res) {
    console.log("get call for user data");
    Item.find({}, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};
exports.find_items = function(req, res) {
    console.log("find item ");
    var name=req.body.name;
    var regEx='.*'+name+'.*';
    Item.find({"name": new RegExp(regEx, 'gi')}, function(err, result) {
        if (err) {
            res.send(err);
        }

        res.json(result);
    });
};
exports.get_items = function(req, res) {
    console.log("get call for single item " + req.params.itemId);
    Item.find({itemId:req.params.itemId}, function(err, result) {
        if (err) {
            res.send(err);
        }

        res.json(result);
    });
};
exports.create_new_items = function(req, res) {
    var item = new Item(req.body);
    item.last_updated = new Date();
    item.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'data save' });
    })
}

exports.update_a_item = function(req, res) {
    req.body.last_updated=new Date();
    req.body.itemId=req.params.itemId;
    Item.findOneAndUpdate({itemId:req.params.itemId}, req.body, {new: true}, function(err, item) {
        if (err)
            res.send(err);
        res.json({ message: "name updated" });
    });

    console.log("put call with requestId in path")
};

exports.delete_a_item = function(req, res) {
    Item.remove({
        itemId: req.params.taskId
    }, function(err, Item) {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Successful delete" });
    });
    console.log("delete call withe requestId in path")
};
/**
 * .
 */