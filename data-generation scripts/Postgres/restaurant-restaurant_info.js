const faker = require('faker');
const fs = require('fs');
const {randomNumGenerator} = require('../helper-functions.js');

const writeRest = fs.createWriteStream(__dirname +'/../../csv-files/Postgres/restaurants-restaurant_info.csv');
writeRest.write('id|name|featuredTip\n', 'utf8');

function getRandomDish() {
  let randomNum = randomNumGenerator(83);
  let dishImg = `https://zigat-media.s3.us-east-2.amazonaws.com/featured_dishes/dish+(${randomNum}).jpg`;

  return [faker.commerce.productName(), dishImg ];
}

function writeRestaurants(numOfRest, writer, encoding, callback) {
  let i = numOfRest;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.company.companyName();
      //generate three featured dishes with name and URL

      const featuredTip = faker.lorem.sentence();

      const data = `${id}|${name}|${featuredTip}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

module.exports = {
  writeRestaurants,
  writeRest
}

