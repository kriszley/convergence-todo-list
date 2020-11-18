// Defines Authentication Middleware.
// Pass in as Middleware for all routes.

const jwt = require("jsonwebtoken");
const config = require('../config/default.json');

module.exports = function(req, res, next) {
  // Get the token from the header if present.
  const token = req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config["myprivatekey"]);
    req.user = decoded;
    next();
  } catch (ex) {
    // Invalid token.
    res.status(400).send("Invalid token.");
  }
};
