/**
 * .
 */
'use strict';

module.exports = function(app) {
    var userController = require('../controllers/user-controller.js');
    var itemController = require('../controllers/item-controller.js');
    var locationController = require('../controllers/location-controller.js');


    app.route('/user')
        .get(userController.list_all_users)
        .post(userController.create_new_user)
        .put(userController.update_user)
        .delete(userController.invalidate_user);

    app.route('/user/:userId')
        .get(userController.get_users);

    app.route('/item')
        .get(itemController.list_all_items)
        .post(itemController.create_new_items);

    app.route('/item/search')
        .post(itemController.find_items);

    app.route('/item/:itemId')
        .get(itemController.get_items)
        .put(itemController.update_a_item)
        .delete(itemController.delete_a_item);
    app.route('/location')
        .get(locationController.read_location)
        .post(locationController.create_new_location);
};