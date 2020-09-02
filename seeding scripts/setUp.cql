DROP KEYSPACE IF EXISTS restaurants;

CREATE KEYSPACE restaurants WITH replication={'class': 'SimpleStrategy', 'replication_factor': 1};

CREATE TYPE restaurants.dish ( name text, url text );

CREATE TABLE restaurants.restaurant_info (
  id text,
  name text,
  featured_tip text,
  PRIMARY KEY (id, name)
);

CREATE TABLE restaurants.featured_dishes (
  restaurant_id text PRIMARY KEY,
  dish_one FROZEN<dish>,
  dish_two FROZEN<dish>,
  dish_three FROZEN<dish>
);

CREATE TABLE restaurants.known_for (
  restaurant_id text PRIMARY KEY,
  features list<int>
);

CREATE TABLE restaurants.articles (
  restaurant_id text PRIMARY KEY,
  articles list<int>
);

DROP KEYSPACE IF EXISTS indexes;

CREATE KEYSPACE indexes WITH replication={'class': 'SimpleStrategy', 'replication_factor': 1};

CREATE TABLE indexes.articles (
  id UUID primary key,
  name text,
  image text
);

CREATE TABLE indexes.known_for (
  id UUID primary key,
  name text,
  image text
);