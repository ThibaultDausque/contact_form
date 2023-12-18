
const { Client } = require('pg');
const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'contactForm',
  password: 'password',
  port: 5432
});

client.connect(function(err: any) {
  if (err) throw err;
  console.log("Connected!");
});

export default client;