// auth.js - Auth model module.
"use strict";

const client = require('../db.js');

/**
 * Function to check if user exists in the DB
 * @param  {String} email user email
 * 
 * @returns {Object} user obj
 */
async function get_user(email) {
    const text = 'SELECT FROM Users WHERE email = ?'
    const values = [email]
    try {
        console.log("here")
        const res = await client.query(text, values)
        console.log(res)
        return res.rows[0]
    } catch (err) {
        return null
    }
}

module.exports = {
    get_user: get_user
}