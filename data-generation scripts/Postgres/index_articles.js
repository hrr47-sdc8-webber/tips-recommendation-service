const faker = require('faker');
const fs = require('fs');
const {randomNumGenerator} = require('../helper-functions.js');

const writeArt = fs.createWriteStream(__dirname +'/../../csv-files/Postgres/indexes_articles.csv');
writeArt.write('id|name|image\n', 'utf8');


function writeArticles(numOfArt, writer, encoding, callback) {
  let i = numOfArt;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let randomNum = randomNumGenerator(797);
      let articleImg = `https://zigat-media.s3.us-east-2.amazonaws.com/article_images/img+(${randomNum}).jpg`;
      const data = `${id}|${faker.lorem.sentence()}|${articleImg}\n`;
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
  writeArticles,
  writeArt
};
