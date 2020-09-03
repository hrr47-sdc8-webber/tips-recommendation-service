const faker = require('faker');
const fs = require('fs');

const writeRest = fs.createWriteStream('restaurants.csv');
writeRest.write('id|name|featuredDishes|featuredTip|knownFor|articles\n', 'utf8');

function randomNumGenerator (max) {
  return Math.floor(Math.random() * max + 1);
}
function getRandomDish() {
  let randomNum = randomNumGenerator(83);
  let dishImg = `https://zigat-media.s3.us-east-2.amazonaws.com/featured_dishes/dish+(${randomNum}).jpg`;

  return [faker.commerce.productName(), dishImg ];
}

function writeRestaurants(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.company.companyName();
      //generate three featured dishes with name and URL
      let featuredDishes = [];
      for (let x = 0; x < 3; x++) {
        featuredDishes.push(getRandomDish());
      }
      const featuredTip = faker.lorem.sentence();
      let knownFor = [];
      let randomNum = randomNumGenerator(5);
      for (let x = 0; x < randomNum; x++) {
        const randomFeature = randomNumGenerator(14);
        if (knownFor.indexOf(randomFeature) === -1) {
          knownFor.push(randomFeature);
        }
      }
      let articles = [];
      randomNum = randomNumGenerator(20);
      for (let x = 0; x < randomNum; x++) {
        let randomArticle = randomNumGenerator(50000);
        if (articles.indexOf(randomArticle) === -1) {
          articles.push(randomArticle);
        }
      }
      const data = `${id}|${name}|${featuredDishes}|${featuredTip}|${knownFor}|${articles}\n`;
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

