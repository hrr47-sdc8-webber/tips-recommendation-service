const faker = require('faker');
const mysql = require('mysql');
const config = require('./config.js')

const connection = mysql.createConnection(config);

connection.connect();

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

let restaurantEntries = [];

function generateIndividualRestaurantData() {

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
    // console.log(restaurantData['features']);
  }

  randomInteger = getRandomInteger(1, 20);

  while (restaurantData['tags'].length < randomInteger) {
    restaurantData['tags'].push(faker.commerce.productAdjective());
  }

  return restaurantData;
}

for (restaurantCount = 0; restaurantCount < 100; restaurantCount++) {
  let restaurantObject = generateIndividualRestaurantData();

  let columns = `restaurant_name, dish_name1, dish_image1, dish_name2, dish_image2, dish_name3, dish_image3, tip, features, tags`;
  let values = '"' + restaurantData['restaurantName'] + '", ' + '"' + restaurantData['dishName1'] + '", ' + '"' + restaurantData['dishImage1'] + '", ' + '"' + restaurantData['dishName2'] + '", ' + '"' + restaurantData['dishImage2'] + '", ' + '"' + restaurantData['dishName3'] + '", ' + '"' + restaurantData['dishImage3'] + '", ' + '"' + restaurantData['tip'] + '", ' + '"' + restaurantData['features'] + '", ' + '"' + restaurantData['tags'] + '"'
  console.log(values);

  connection.query("INSERT INTO Restaurants (" + columns + ") VALUES (" + values + ")", (error, results, fields) => {
      if (error) {
        console.log(error);
        return;
      }

      console.log(results);
    });
}

// for (var i = 0; i < restaurantEntries.length; i++) {
//   // console.log(restaurantEntries);
//   console.log(restaurantEntries[0]);
//   let currentRestaurantName = restaurantEntries[i]['restaurantName'];
//   let currentDishName1 = restaurantEntries[i]['dishName1'];
//   let currentDishImage1 = restaurantEntries[i]['dishImage1'];
//   let currentDishName2 = restaurantEntries[i]['dishName2'];
//   let currentDishImage2 = restaurantEntries[i]['dishImage2'];
//   let currentDishName3 = restaurantEntries[i]['dishName3'];
//   let currentDishImage3 = restaurantEntries[i]['dishImage3'];
//   let currentTip = restaurantEntries[i]['tip'];
//   let currentFeatures = restaurantEntries[i]['features'];
//   let currentTags = restaurantEntries[i]['tags'];

//   let columns = `restaurant_name, dish_name1, dish_image1, dish_name2, dish_image2, dish_name3, dish_image3, tip, features, tags`;

//   let values = currentRestaurantName + ', ' + currentDishName1 + ', ' + currentDishImage1 + ', ' + currentDishName2 + ', ' + currentDishImage2 + ', ' + currentDishName3 + ', ' + currentDishImage3 + ', ' + currentTip + ', ' + currentFeatures + ', ' + currentTags;

//   connection.query("INSERT INTO Restaurants (" + columns + ") VALUES (" + values + ")", (error, results, fields) => {
//     //   if (error) {
//     //     console.log(error);
//     //     return;
//     //   }

//     //   console.log(results);
//     });
// }