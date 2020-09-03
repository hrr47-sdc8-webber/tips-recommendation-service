const express = require('express');
const db = require('../database/index.js');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());

app.use(express.static('client/dist'));
app.use('/:id', express.static('client/dist'));

app.get(`/api/:id`, (req, res) => {
  const restaurantId = req.params.id;

  db.getRestaurant(restaurantId, (error, data) => {
    if (error) {
      console.log('Error at server/restaurants GET request');
    } else {
      res.send(data);
    }
  });
});

app.post(`/api/restaurants`, (req, res) => {
  db.addRestaurant(req.body,(error, data) => {
    if (error) {
      console.log('Error at server/restaurants POST request');
    } else {
      res.send(data);
    }
  })
});
app.put(`/api/restaurants/:id`, (req, res) => {
  db.addRestaurant(req.body,(error, data) => {
    if (error) {
      console.log('Error at server/restaurants POST request');
    } else {
      res.send(data);
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
