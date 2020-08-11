const express = require('express');
const app = express();
const db = require('../database/index.js');

const port = 6070

app.use(express.json());

let articleTags = '';
let results = [];

app.get('/api/tips/:id', function(req, res) {
  let restaurantId = req.params.id;

  db.getRestaurantInfo(restaurantId, function(error, data) {
    if (error) {
      console.log('Error at server/restaurants GET request');
    } else {
      console.log('Successful server/restaurants GET request');
      console.log(data);
      res.send(data);
    }

    articleTags = data[0].tags.split(',');
  });
});

app.get('/api/articles/:id', function(req, res) {
  db.getRestaurantArticles(articleTag, function(error, data) {
    if (error) {
      console.log('Error at server/articles GET request');
    } else {
      console.log('Successful server/articles GET request');
      console.log(data);
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})