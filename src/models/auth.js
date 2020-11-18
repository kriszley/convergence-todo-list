const client = require('../db.js');

// Function to check if user exists in the DB
function get_user(email) {
    const text = 'SELECT FROM Users WHERE email = $1'
    const values = [email]
    try {
        const res = await client.query(text, values)
        return res.rows[0]
    } catch (err) {
        return null
    }
}

// Function to return a generated token.
function generate_auth_token(user) {
    const token = jwt.sign(user, config['myprivatekey'], { expiresIn: '2h' }); //get the private key from the config file -> environment variable
    return token;
}

module.exports = {
    get_user: get_user,
    generate_auth_token: generate_auth_token
}