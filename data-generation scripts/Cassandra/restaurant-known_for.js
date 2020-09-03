const faker = require('faker');
const fs = require('fs');
const {randomNumGenerator} = require('../helper-functions.js');

const writeKF = fs.createWriteStream(__dirname +'/../../csv-files/Cassandra/restaurants-known_for.csv');
writeKF.write('restaurant_id|features\n', 'utf8');


function writeKnownFor(numOfRest, writer, encoding, callback) {
  let i = numOfRest;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      let knownFor = [];
      let randomNum = randomNumGenerator(5);
      for (let x = 0; x < randomNum; x++) {
        const randomFeature = randomNumGenerator(14);
        if (knownFor.indexOf(randomFeature) === -1) {
          knownFor.push(randomFeature);
        }
      }
      const data = `${id}|[${knownFor}]\n`;
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
  writeKF,
  writeKnownFor
}

