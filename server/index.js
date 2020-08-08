const express = require('express');
const app = express();
const mysql = require('mysql');
const config = require('../config.js')

const connection = mysql.createConnection(config);

const port = 6070

connection.connect();

// app.get('/', function(req, res) {
//   connection.query('INSERT INTO Restaurants VALUES (' + restaurantData[restaurantName] + ','+ restaurantData[dishName1] + ',' + restaurantData[dishImage1] + ',' + restaurantData[dishName2] + ', ' ')')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})