const item = require('../models/item.js');

// Function to return an item given an item id.
function read_item(item_id) {
    // Call read_item() from Models that returns `item_obj`
    return item.read_item(item_id);
}

// Function to create and return an item id
function create_item(user_id, data) {
    // Call create_item() from Models that returns `item_id`
    return item.create_item(user_id, data);
}

// Function to update and return an item id
function update_item(user_id, item_id, data) {
    // Check owner of the item
    if(!check_ownership_item(user_id, item_id)){
        return null;
    }
    // Call update_item() from Models that returns `item_id`
    return item.update_item(item_id, data);
}

// Function to delete and return an item id
function delete_item(user_id, item_id) {
    // Check owner of the item
    if(!check_ownership_item(user_id, item_id)){
        return null;
    }
    // Call delete_item() from Models that returns `item_id`
    return item.delete_item(item_id);
}

// Function to search and return a list of item objects
function search_item(data) {
    // Call search_item() from Models that returns list of item objects
    return item.search_item(data);
}

// Function to search and return a list of item objects
function check_ownership_item(user_id, item_id) {
    // Call search_item() from Models that returns list of item objects
    const item_obj = item.read_item(item_id);
    const owner_user_id = item_obj.user_id;

    if(user_id == owner_user_id){
        return true;
    }
    return false;
}

module.exports = {
    read_item: read_item,
    create_item: create_item,
    update_item: update_item,
    delete_item: delete_item,
    search_item: search_item,
    check_ownership_item: check_ownership_item
}