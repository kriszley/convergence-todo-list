const client = require('../db.js');

/**
 * Function to check if user exists in the DB
 * @param  {String} email user email
 * 
 * @returns {Object} user obj
 */
function get_user(email) {
    const text = 'SELECT FROM Users WHERE email = ?'
    const values = [email]
    try {
        const res = await client.query(text, values)
        return res.rows[0]
    } catch (err) {
        return null
    }
}

module.exports = {
    get_user: get_user
}