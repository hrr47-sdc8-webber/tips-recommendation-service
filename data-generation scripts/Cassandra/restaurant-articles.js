const faker = require('faker');
const fs = require('fs');
const {randomNumGenerator} = require('../helper-functions.js');

const writeRA = fs.createWriteStream(__dirname +'/../../csv-files/Cassandra/restaurants-articles.csv');
writeRA.write('restaurant_id|articles\n', 'utf8');

function writeRestaurantArticles(numOfRest, writer, encoding, callback) {
  let i = numOfRest;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let articles = [];
      for (let i = 0; i < 20; i++) {
        let randomNum = randomNumGenerator(50000);
        if (articles.indexOf(randomNum) === -1) {
          articles.push(randomNum);
        }
      }
      const data = `${id}|[${articles}]\n`;
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
  writeRestaurantArticles,
  writeRA
}

