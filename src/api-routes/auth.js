// auth.js - Auth route module.

const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();

const auth = require("../services/auth");

// User login route.
router.post('/login', function (req, res) {
    const email = req.body.email;
    const password = req.body.password

    // Check user existence
    let user = auth.find_user(email)
    if (user == null) {
        return res.status(400).send("User email not found.");
    }
    // Check passwords
    bcrypt.compare(password, user.password, function(err, cb) {
        if(err) {
            res.status(400).send("Error comparing passwords");
        }
        
        if(cb) {
            // Generate auth token. `token`
            const token = auth.generate_auth_token(user);
            // Return header "x-auth-token", `token`
            res.header("x-auth-token", token).status(200).send({
                id: user.id,
                name: user.name,
                email: user.email,
                auth_token: token
            });
        }
        else {
            res.status(400).send("Invalid email/password.");
        }
    });
});

module.exports = router;