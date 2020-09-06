const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const { Pool } = require('pg');
const databaseInfo = require ('../database-info.json')
const pool = new Pool(databaseInfo);

const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());

app.use(express.static('client/dist'));
app.use('/:id', express.static('client/dist'));

app.get(`/api/:id`, async (req, res) => {
  try {
    const restaurantId = req.params.id

    const data = await pool.query(`SELECT name, featured_tip,
    name_One, name_Two, name_Three, image_One, image_Two, image_Three,
    features,
    articles
    FROM restaurant_info ri
    LEFT JOIN restaurant_featuredDishes rfd ON rfd.restaurant_id = '${restaurantId}'
    LEFT JOIN restaurant_knownFor rkf ON rkf.restaurant_id = '${restaurantId}'
    LEFT JOIN restaurant_articles ra ON ra.restaurant_id = '${restaurantId}'
    WHERE ri.id = '${restaurantId}'`)
      .then(async (results) => {
          for (var i = 0; i < results.rows[0].features.length; i++) {
            const query = await pool.query(`SELECT name, image FROM indexes_knownFor WHERE id = '${results.rows[0].features[i]}'`)
            .then((resultsK) => {
              results.rows[0].features[i] = resultsK.rows[0];
            })
            .catch(e => console.error(e));
          }
          return results
      })
      .then(async (results) => {
        for (var i = 0; i < results.rows[0].articles.length; i++) {
          const query = await pool.query(`SELECT name, image FROM indexes_articles WHERE id = '${results.rows[0].articles[i]}'`)
          .then((resultsA) => {
            results.rows[0].articles[i] = resultsA.rows[0];
          })
          .catch(e => console.error(e));
        }
        return results
    })
      .catch(err => console.log(err))

      res.send(data.rows[0]);
    }
  catch(err) {
    console.log(err);
  }



});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
