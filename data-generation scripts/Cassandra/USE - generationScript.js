const { writeRest, writeRestaurants } = require('./restaurant-restaurant_info.js')
const { writeArticles, writeArt } = require('./index_articles.js')
const {  writeKF, writeKnownFor} = require('./restaurant-known_for.js')
const { writeRestaurantArticles, writeRA} = require('./restaurant-articles.js')
const { writeFD, writeFeaturedDishes } = require('./restaurant-featured_dishes.js')
const {  writeKnownForIndex, writeKFI} = require( './index_knownFor.js')

//change number of restaurants generated
const numOfRest = 10000000;

let startTime = new Date();
let endTime;

const WRpromise = new Promise( function (res, rej) {
  writeRestaurants(numOfRest, writeRest, 'utf-8', () => {
    writeRest.end();
    res("Restaurant Info table written");
  });
});
//specify number of articles
const WApromise = new Promise (function(res, rej) {
  writeArticles(50000, writeArt, 'utf-8', () => {
    writeArt.end();
    res("Index Articles Table Written")
  });
});
const WRApromise = new Promise (function(res, rej) {
  writeRestaurantArticles(numOfRest, writeRA, 'utf-8', () => {
    writeRA.end();
    res("Restaurant_Articles Table Written")
  });
});
const WKFpromise = new Promise (function(res, rej) {
  writeKnownFor(numOfRest, writeKF, 'utf-8', () => {
    writeKF.end();
    res("Restaurant_KnownFor Table Written")
  });
});
const WFDpromise = new Promise (function(res, rej) {
  writeFeaturedDishes(numOfRest, writeFD, 'utf-8', () => {
    writeFD.end();
    res("Restaurant_FeaturedDishes Table Written")
  });
});
const WKFIpromise = new Promise (function(res, rej) {
  writeKnownForIndex(writeKFI, 'utf-8', () => {
    writeKFI.end();
    res("Index Known For Table Written")
  });
});

WRpromise.then((msg) => {
  endTime = new Date();
  console.log(msg + " in " + (Math.round((endTime - startTime)/1000))/60 + " mins");
  WApromise.then((msg) =>{
    endTime = new Date();
  console.log(msg + " in " + (Math.round((endTime - startTime)/1000))/60 + " mins");
    WRApromise.then((msg) =>{
      endTime = new Date();
    console.log(msg + " in " + (Math.round((endTime - startTime)/1000))/60 + " mins");
      WKFpromise.then((msg) =>{
        endTime = new Date();
      console.log(msg + " in " + (Math.round((endTime - startTime)/1000))/60 + " mins");
        WFDpromise.then((msg) =>{
          endTime = new Date();
        console.log(msg + " in " + (Math.round((endTime - startTime)/1000))/60 + " mins");
          WKFIpromise.then((msg) =>{
            endTime = new Date();
          console.log(msg + " in " + Math.round((endTime - startTime)/1000) + " seconds");
          })
        })
      })
    })
  })
});




