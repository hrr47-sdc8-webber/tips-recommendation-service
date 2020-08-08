const faker = require('faker');

let restaurantEntries = [];

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

  restaurantData['restaurantName'] = faker.company.companyName();

  restaurantData['dishName1'] = faker.commerce.product();
  restaurantData['dishName2'] = faker.commerce.product();
  restaurantData['dishName3'] = faker.commerce.product();

  restaurantData['dishImage1'] = faker.image.food();
  restaurantData['dishImage2'] = faker.image.food();
  restaurantData['dishImage3'] = faker.image.food();

  restaurantData['tip'] = faker.lorem.sentence();

  // need to push a random # of values between 1 and 10 to features array and to tags array
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
  };

  let randomInteger = getRandomInteger(1, 10);

  while (restaurantData['features'].length < randomInteger) {
    restaurantData['features'].push(faker.commerce.productAdjective());
  }

  randomInteger = getRandomInteger(1, 20);

  while (restaurantData['tags'].length < randomInteger) {
    restaurantData['tags'].push(faker.commerce.productAdjective());
  }

  restaurantEntries.push(restaurantData);
}

function generateBulkRestaurantData(totalNumberOfEntries) {
  while (restaurantEntries.length < totalNumberOfEntries) {
    generateIndividualRestaurantData();
    console.log(restaurantEntries);
  }
}

generateBulkRestaurantData(100);