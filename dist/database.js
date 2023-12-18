"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Client } = require('pg');
const client = new Client({
    user: 'root',
    host: 'localhost',
    database: 'contactForm',
    password: 'password',
    port: 5432
});
client.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});
exports.default = client;
