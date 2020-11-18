const item = require('../models/item.js');

// Function to return an item given an item id.
function read_item(item_id) {
    // TODO: Call read_item() from Models that returns `item_obj`
    

    return /* item obj */
}

// Function to create and return an item id
function create_item(user_id, data) {
    // TODO: Call create_item() from Models that returns `item_id`

    return /* item id */
}

// Function to update and return an item id
function update_item(user_id, item_id, data) {
    // TODO: Check owner of the item

    // TODO: Call update_item() from Models that returns `item_id`

    return /* item id */
}

// Function to delete and return an item id
function delete_item(user_id) {
    // TODO: Check owner of the item
    
    // TODO: Call delete_item() from Models that returns `item_id`

    return /* item id */
}

// Function to search and return a list of item objects
function search_item(item_id, data) {
    // TODO: Call search_item() from Models that returns list of item objects

    return /* list of item objects */
}

module.exports = {
    read_item: read_item,
    create_item: create_item,
    update_item: update_item,
    delete_item: delete_item,
    search_item: search_item
}