const faker = require('faker');
const fs = require('fs');
const {randomNumGenerator} = require('../helper-functions.js');

const writeKFI = fs.createWriteStream(__dirname +'/../../csv-files/Postgres/indexes_knownFor.csv');
writeKFI.write('id|name|image\n', 'utf8');

function writeKnownForIndex(writer, encoding, callback) {
  function write() {
    writeKFI.write('1|Takeout|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(1).svg\n', 'utf8');
    writeKFI.write('2|Lunch|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(2).svg\n', 'utf8');
    writeKFI.write('3|Lively scenes|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(3).svg\n', 'utf8');
    writeKFI.write('4|Outdoor seating|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(4).svg\n', 'utf8');
    writeKFI.write('5|Takeout|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(5).svg\n', 'utf8');
    writeKFI.write('6|Dinner|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(6).svg\n', 'utf8');
    writeKFI.write('7|Drinks|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(7).svg\n', 'utf8');
    writeKFI.write('8|Kids|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(8).svg\n', 'utf8');
    writeKFI.write('9|Breakfast|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(9).svg\n', 'utf8');
    writeKFI.write('10|Special occasion|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(10).svg\n', 'utf8');
    writeKFI.write('11|Brunch|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(11).svg\n', 'utf8');
    writeKFI.write('12|Online reservations|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(12).svg\n', 'utf8');
    writeKFI.write('13|Private rooms|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(13).svg\n', 'utf8');
    writeKFI.write('14|Business Dining|https://zigat-media.s3.us-east-2.amazonaws.com/knownFor_icons/icon+(14).svg\n', 'utf8');
  }
write()
}




module.exports = {
  writeKFI,
  writeKnownForIndex
};