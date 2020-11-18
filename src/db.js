const Client = require("pg").Client;

const client = new Client({
    user: "convergence",
    password: "password2",
    host: "localhost",
    port: 5432,
    database: "convergencetodo"
});

module.exports = client;