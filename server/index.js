const express = require('express');
const app = express();
const mysql = require('mysql');
const config = require('../database/config.js')

const connection = mysql.createConnection(config);

const port = 6070

connection.connect();

app.get('/', function(req, res) {
  connection.query('SELECT * FROM Restaurants', (error, results, fields) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(results[0]);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})