const mysql = require('mysql');
const config = require('../database/config.js')

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL database');
  } else {
    console.log('MySQL database connected');
  }
});

let getRestaurantInfo = function(restaurantId, callback) {
  connection.query('SELECT * FROM Restaurants WHERE id = ' + restaurantId, (error, results, fields) => {
    if (error) {
      console.log('Error at getRestaurantInfo in database index file');
      callback(error, null);
      return;
    }
    console.log('Success at getRestaurantInfo in database index file');
    callback(null, results);
  });
};

let getRestaurantArticles = function(articleTag, callback) {
  connection.query('SELECT * FROM Articles WHERE tags LIKE %{$' + articleTag + '}', (error, results, fields) => {
    if (error) {
      console.log('Error at getRestaurantArticles in database index file');
      callback(error, null);
      return;
    }
    console.log('Success at getRestaurantArticles in database index file');
    callback(null, results);
  });
};

module.exports = {
  getRestaurantInfo,
  getRestaurantArticles
};
