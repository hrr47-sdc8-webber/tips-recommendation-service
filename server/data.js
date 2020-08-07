const faker = require('faker');
const fs = require('fs');

function generateRestaurantData () {
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

  let randomRestaurantName = faker.company.companyName();
  let randomDishName = faker.commerce.product();
  let randomDishImage = faker.image.food();
  let randomTip = faker.commerce.productDescription();
  let randomFeature = faker.commerce.productAdjective();
  let randomTags = faker.commerce.productAdjective();

  for (let id = 1; id <= 100; id++) {

  }
}