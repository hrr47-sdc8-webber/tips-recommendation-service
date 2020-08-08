const faker = require('faker');
const fs = require('fs');
const express = require('express')
const app = express();

const port = 6070

let restaurantEntries = [];

let randomRestaurantName = faker.company.companyName();
let randomDishName = faker.commerce.product();
let randomDishImage = faker.image.food();
let randomTip = faker.commerce.productDescription();
let randomFeature = faker.commerce.productAdjective();
let randomTag = faker.commerce.productAdjective();

function generateIndividualRestaurantData() {

  let restaurantData = {
    restaurantName: '',
    dishName1: '',
    dishImage1: '',
    dishName2: '',
    dishImage2: '',
    dishName3: '',
    dishImage3: '',
    tip: '',
    features: [],
    tags: []
  };

  for (var restaurantCount = 1; restaurantCount <= 100; restaurantCount++) {
    restaurantData[restaurantName] = randomRestaurantName;

    restaurantData[dishName1] = randomDishName;
    restaurantData[dishName2] = randomDishName;
    restaurantData[dishName3] = randomDishName;

    restaurantData[dishImage1] = randomDishImage;
    restaurantData[dishImage2] = randomDishImage;
    restaurantData[dishImage3] = randomDishImage;

    restaurantData[tip] = randomTip;

    // need to push a random # of values between 1 and 10 to features array and to tags array
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max-min + 1)) + min;
    };

    let randomInteger = getRandomInteger(1, 10);

    while (restaurantData[features].length < randomInteger) {
      restaurantData[features].push(randomFeature);
    }

    randomInteger = getRandomInteger(1, 20);

    while (restuarantData[tags].length < randomInteger) {
      restaurantData[tags].push(randomTag);
    }

    restaurantEntries.push(restaurantData);
  }
}

// let generateRestaurant = generateIndividualRestaurantData();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});