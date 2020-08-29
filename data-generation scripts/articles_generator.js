const faker = require('faker');
const fs = require('fs');

const writeArt = fs.createWriteStream('articles.csv');
writeArt.write('id|article\n', 'utf8');

function randomNumGenerator (max) {
  return Math.floor(Math.random() * max + 1);
}

function generateRandomArticle() {
  let randomNum = randomNumGenerator(367);
  let articleImg = `https://zigat-media.s3.us-east-2.amazonaws.com/article_images/img+(${randomNum}).jpg`;
  return [faker.lorem.sentence(), articleImg ];
};


function writeArticles(writer, encoding, callback) {
  let i = 500000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const article = generateRandomArticle();
      const data = `${id}|${article}\n`;
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
