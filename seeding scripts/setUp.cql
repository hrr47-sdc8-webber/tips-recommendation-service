DROP KEYSPACE IF EXISTS restaurants;
DROP KEYSPACE IF EXISTS indexes;

CREATE KEYSPACE restaurants WITH replication={'class': 'SimpleStrategy', 'replication_factor': 1};
CREATE KEYSPACE indexes WITH replication={'class': 'SimpleStrategy', 'replication_factor': 1};

CREATE TABLE restaurants.restaurant_info (
  id text,
  name text,
  featured_tip text,
  PRIMARY KEY (id, name)
);

CREATE TABLE restaurants.featured_dishes (
  restaurant_id text,
  name_One text,
  image_One text,
  name_Two text,
  image_Two text,
  name_Three text,
  image_Three text,
  PRIMARY KEY (restaurant_id)
);

CREATE TABLE restaurants.known_for (
  restaurant_id text PRIMARY KEY,
  features list<int>
);

CREATE TABLE restaurants.articles (
  restaurant_id text PRIMARY KEY,
  articles list<int>
);

CREATE TABLE indexes.articles (
  id int primary key,
  name text,
  image text
);

CREATE TABLE indexes.known_for (
  id int primary key,
  name text,
  image text
);

COPY restaurants.featured_dishes (restaurant_id, name_one, image_one, name_two, image_two, name_three, image_three) FROM './csv-files/restaurants-featured_dishes.csv' WITH DELIMITER = '|' AND MAXOUTPUTSIZE=50000 AND HEADER = TRUE;
COPY restaurants.restaurant_info (id, name, featured_tip) FROM './csv-files/Cassandra/restaurants-restaurant_info.csv' WITH DELIMITER = '|' AND MAXOUTPUTSIZE=50000 AND HEADER = TRUE;
COPY restaurants.known_for (restaurant_id, features) FROM './csv-files/Cassandra/restaurants-known_for.csv' WITH DELIMITER = '|'   AND MAXOUTPUTSIZE=50000 AND MAXBATCHSIZE=20 AND HEADER = TRUE;
COPY restaurants.articles (restaurant_id, articles) FROM './csv-files/Cassandra/restaurants-articles.csv' WITH DELIMITER = '|'  AND MAXOUTPUTSIZE=50000 AND HEADER = TRUE;
COPY indexes.known_for (id, name, image) FROM './csv-files/Cassandra/indexes_knownFor.csv' WITH DELIMITER = '|'   AND MAXOUTPUTSIZE=50000 AND HEADER = TRUE;
COPY indexes.articles (id, name, image) FROM './csv-files/Cassandra/indexes_articles.csv' WITH DELIMITER = '|'  AND MAXOUTPUTSIZE=50000 AND HEADER = TRUE;