// auth.js - Auth route module.

var express = require('express');
var router = express.Router();

// User login route.
router.post('/login', function (req, res) {
    const email = req.body.email;
    const password = req.body.password
    // TODO: Validate request body

    // TODO: Check user exists
    // TODO: Check passwords

    // TODO: Generate auth token. `token`

    // TODO: Return header "x-auth-token", `token`

    res.send(/*user ID*/);
})

module.exports = router;