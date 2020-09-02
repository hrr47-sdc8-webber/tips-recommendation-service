var fs = require('fs');
var csv = require('csv');
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1'
});

//seed restaurants keyspace
//break up csv file
const parser = csv.parse({delimiter: '|', from_line: '2'});
let dishes = [];
let knownFeat = [];
let articles = [];
fs.createReadStream(__dirname+'/../restaurants.csv')
    .pipe(parser)
    .on('data', (row) => {
        client.execute(`INSERT INTO restaurants.restaurant_info (id, name, featured_tip) VALUES ( '${row[0]}', $$${row[1]}$$, '${row[3]}')`)
        .then(() => {
            csv.parse(row[2], (err, records) => {
                dishes = records[0];

                client.execute(`INSERT INTO restaurants.featured_dishes (restaurant_id, dish_one, dish_two, dish_three) VALUES ('${row[0]}', { name: '${dishes[0]}', url: '${dishes[1]}'}, { name: '${dishes[2]}', url: '${dishes[3]}'}, { name: '${dishes[4]}', url: '${dishes[5]}'})`)
                .catch( (err) => console.log(err));
            });
        })
        .then(() => {
            csv.parse(row[4], (err, num) => {
                knownFeat = num[0];

                client.execute(`INSERT INTO restaurants.known_for (restaurant_id, features) VALUES ('${row[0]}', [${knownFeat}])`)
                .catch( (err) => console.log(err));
            });
        })
        .then(() => {
            csv.parse(row[5], (err, art) => {
                articles = art[0];
                client.execute(`INSERT INTO restaurants.articles (restaurant_id, articles) VALUES ('${row[0]}', [${articles}])`)
                .catch( (err) => console.log(err));
            });
        })
        .catch( (err) => {
            console.log(err);
        });
    })
    .on('error', (err) => console.log(err))
    .on('end', () => console.log("Cassandra Seeded"));