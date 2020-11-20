// item.js - Item model module.
"use strict";

const client = require('../db.js');

/**
 * Function to return an item given an item id.
 * @param  {Number} item_id Item ID
 * 
 * @returns {Object} item obj
 */
async function read_item(item_id) {
    // Generate query string
    const text = 'SELECT * FROM Items WHERE id = ?';
    const values = [item_id];
    // Call query and return the read item object upon success
    try {
        const res = await client.query(text, values);
        return res.rows[0];
    } catch (err) {
        return err;
    }
}

/**
 * Function to create and return an item id
 * @param  {Number} user_id Current user ID
 * @param  {Object} data Item data object
 * 
 * @returns {Number} Created item's ID
 */
async function create_item(user_id, data) {
    const description = data.description;
    const category = data.category;
    const time = data.time;
    const urgency = data.urgency;

    // Generate query string
    const text = 'INSERT INTO Items (user_id, description, category, time, urgency) VALUES (?,?,?,?,?) RETURNING id';
    const values = [user_id, description, category, time, urgency];
    // Call query and return the created item's ID upon success
    try {
        const res = await client.query(text, values);
        return res.rows[0];
    } catch (err) {
        return null;
    }
}

/**
 * Function to update and return an item id
 * @param  {Number} item_id ID of the item to be updated
 * @param  {Object} data Item data object with fields to be updated
 * 
 * @returns {Number} Updated item's ID
 */
async function update_item(item_id, data) {
    let text = 'UPDATE Items SET id = id';
    let text_where = ' WHERE id = ? RETURNING id';
    let values = [];


    // Append to the 'set' condition if each field exist in the data object
    if(data.hasOwnProperty('description')){
        values.push(data.description);
        text += ', description = ?';
    }
    if(data.hasOwnProperty('category')){
        values.push(data.category);
        text += ', category = ?';
    }
    if(data.hasOwnProperty('time')){
        values.push(data.time);
        text += ', time = ?';
    }
    if(data.hasOwnProperty('urgency')){
        values.push(data.urgency);
        text += ', urgency = ?';
    }

    // Append 'where' condition with the Item ID parameter
    values.push(item_id);
    text += text_where;

    // Call query and return the updated item's ID upon success
    try {
        const res = await client.query(text, values);
        return item_id;
    } catch (err) {
        return null;
    }
}


/**
 * Function to delete and return an item id
 * @param  {Number} item_id ID of the item to be deleted
 * 
 * @returns {Number} Deleted item's ID
 */
async function delete_item(item_id) {
    // Generate query string
    const text = 'DELETE FROM Items WHERE id = ?';
    const values = [item_id];
    // Call query and return the deleted item's ID upon success
    try {
        const res = await client.query(text, values);
        return item_id;
    } catch (err) {
        return null;
    }
}

/**
 * Function to search and return a list of item objects
 * @param  {Object} data Item data object with fields to be the search criteria
 * 
 * @returns {Array} Array of item objects that meets the search criteria
 */
async function search_item(data) {
    // Generate query string
    let text = 'SELECT * FROM Items WHERE 1 = 1';
    let values = [];

    // Append to the 'where' condition if each field exist in the data object
    if(data.hasOwnProperty('description')){
        values.push(data.description);
        text += ' and description = ?';
    }
    if(data.hasOwnProperty('category')){
        values.push(data.category);
        text += ' and category = ?';
    }
    if(data.hasOwnProperty('time')){
        values.push(data.time);
        text += ' and time = ?';
    }
    if(data.hasOwnProperty('urgency')){
        values.push(data.urgency);
        text += ' and urgency = ?';
    }
    
    // Call query and return result object
    try {
        const res = await client.query(text, values)
        return res.rows[0];
    } catch (err) {
        return null;
    }
}

module.exports = {
    read_item: read_item,
    create_item: create_item,
    update_item: update_item,
    delete_item: delete_item,
    search_item: search_item
}