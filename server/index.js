const express = require('express');
const app = express();
const db = require('../database/index.js');

const port = 6070

app.use(express.json());

app.get('/api/tips/:id', function(req, res) {
  let restaurantId = req.params.id;
  db.getRestaurantInfo(restaurantId, function(error, data) {
    if (error) {
      console.log('Error at server GET request');
    } else {
      console.log('Successful server GET request');
      console.log(data);
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})