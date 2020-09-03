const faker = require('faker');
const fs = require('fs');
const {randomNumGenerator} = require('../helper-functions.js');

const writeFD = fs.createWriteStream(__dirname +'/../../csv-files/Postgres/restaurants-featured_dishes.csv');
writeFD.write('restaurant_id|name_One|image_One|name_Two|image_Two|name_Three|image_Three\n', 'utf8');

function getRandomDish() {
  let randomNum = randomNumGenerator(83);
  let dishImg = `https://zigat-media.s3.us-east-2.amazonaws.com/featured_dishes/dish+(${randomNum}).jpg`;

  return { name: faker.commerce.productName(), image: dishImg };
}

function writeFeaturedDishes(numOfRest, writer, encoding, callback) {
  let i = numOfRest;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let dishOne = getRandomDish();
      let dishTwo = getRandomDish();
      let dishThree = getRandomDish();
      const data = `${id}|${dishOne.name}|${dishOne.image}|${dishTwo.name}|${dishTwo.image}|${dishThree.name}|${dishThree.image}\n`;
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
  writeFeaturedDishes,
  writeFD
}

