// auth.js - Auth service module.
"use strict";

const jwt = require('jsonwebtoken');

const config = require('../config/default.json');
const auth = require('../models/auth.js');

/**
 * Function to check if user exists in the DB.
 * @param  {String} email user email
 * 
 * @returns {Object} user obj
 */
function find_user(email) {
    // Call check_user() from Models that returns `user obj`
    return auth.get_user(email);
}

/**
 * Function to return a generated token.
 * @param  {Object} user user obj
 * 
 * @returns {String} JWT token
 */
function generate_auth_token(user) {
    // Get the private key from the config file -> environment variable
    const token = jwt.sign(user, config.myprivatekey, { expiresIn: '2h' }); 
    return token;
}

module.exports = {
    find_user: find_user,
    generate_auth_token: generate_auth_token
}