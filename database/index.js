const mysql = require('mysql');
const config = require('./configFile.js');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL database');
  } else {
    console.log('MySQL database connected');
  }
});

const getRestaurantInfo = function (restaurantId, callback) {
  connection.query(`SELECT * FROM Restaurants WHERE id = ${restaurantId}`, (error, results) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results);
  });
};

const getRestaurantArticles = function (callback) {
  connection.query(`SELECT * FROM Articles`, (error, results) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, results);
  });
};

module.exports = {
  getRestaurantInfo,
  getRestaurantArticles,
};
