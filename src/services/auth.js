const jwt = require('jsonwebtoken');

const config = require('../config/default.json');
const auth = require('../models/auth.js');

// Function to check if user exists in the DB
function find_user(email) {
    // TODO: Call check_user() from Models that returns `user obj`
    user = auth.get_user(email);
    return user
}

// Function to return a generated token.
function generate_auth_token(user) {
    const token = jwt.sign(user, config['myprivatekey'], { expiresIn: '2h' }); //get the private key from the config file -> environment variable
    return token;
}

module.exports = {
    find_user: find_user,
    generate_auth_token: generate_auth_token
}