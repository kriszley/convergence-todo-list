// app.js - App loader
"use strict";

const express = require('express');
const http = require('http');

const config = require('./config/default.json');
const route_auth = require('./api-routes/auth.js');
const route_item = require('./api-routes/item.js');

// Constants
const PORT = config.port;
const HOST = config.host;

// App
const app = express();

// Use routes.
app.use(express.json());
app.use(route_auth);
app.use(route_item);

app.get('/', (req, res) => {
  res.send('Chris Lee\'s Convergence BE Todo App')
});

http.createServer(app).listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`);
