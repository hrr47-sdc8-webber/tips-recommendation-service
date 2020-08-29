const { writeRest, writeRestaurants } = require('./restaurant_table_generator.js')
const { writeArticles, writeArt } = require('./articles_generator.js')

writeRestaurants(writeRest, 'utf-8', () => {
  writeRest.end();
  console.log("Restaurant Table Written")
});

writeArticles(writeArt, 'utf-8', () => {
  writeArt.end();
  console.log("Article Table Written")
});