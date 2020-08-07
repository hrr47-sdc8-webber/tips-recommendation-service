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
  let randomTag = faker.commerce.productAdjective();

  for (let id = 1; id <= 100; id++) {
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
    }
  }
}