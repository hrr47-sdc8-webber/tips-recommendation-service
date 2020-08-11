const express = require('express');
const app = express();
const mysql = require('mysql');
const config = require('../database/config.js')

const connection = mysql.createConnection(config);

const port = 6070

connection.connect();

app.get('/api/tips/:id', function(req, res) {
  let restaurantId = req.params.id;
  connection.query('SELECT * FROM Restaurants WHERE id = ' + restaurantId, (error, results, fields) => {
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