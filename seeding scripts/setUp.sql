DROP TABLE IF EXISTS restaurant_info;
DROP TABLE IF EXISTS restaurant_featuredDishes;
DROP TABLE IF EXISTS restaurant_knownFor;
DROP TABLE IF EXISTS restaurant_articles;
DROP TABLE IF EXISTS indexes_articles;
DROP TABLE IF EXISTS indexes_knownFor;

CREATE TABLE restaurant_info (
  id text,
  name text,
  featured_tip text,
  PRIMARY KEY (id, name)
);



CREATE TABLE restaurant_featuredDishes (
  restaurant_id text,
  name_One text,
  image_One text,
  name_Two text,
  image_Two text,
  name_Three text,
  image_Three text,
  PRIMARY KEY (restaurant_id)
);



CREATE TABLE restaurant_knownFor (
  restaurant_id text PRIMARY KEY,
  features integer[]
);



CREATE TABLE restaurant_articles (
  restaurant_id text PRIMARY KEY,
  articles integer[]
);



CREATE TABLE indexes_articles (
  id int primary key,
  name text,
  image text
);


CREATE TABLE indexes_knownFor (
  id int primary key,
  name text,
  image text
);

COPY restaurant_featuredDishes (restaurant_id, name_one, image_one, name_two, image_two, name_three, image_three) FROM '/mnt/c/Users/chand/Hack Reactor Projects/SDC/tips-recommendations-service/csv-files/Postgres/restaurants-featured_dishes.csv' DELIMITER '|' CSV HEADER;
COPY restaurant_info (id, name, featured_tip) FROM '/mnt/c/Users/chand/Hack Reactor Projects/SDC/tips-recommendations-service/csv-files/Postgres/restaurants-restaurant_info.csv' DELIMITER '|' CSV HEADER;
COPY restaurant_knownFor (restaurant_id, features) FROM '/mnt/c/Users/chand/Hack Reactor Projects/SDC/tips-recommendations-service/csv-files/Postgres/restaurants-known_for.csv' DELIMITER '|' CSV HEADER;
COPY restaurant_articles (restaurant_id, articles) FROM '/mnt/c/Users/chand/Hack Reactor Projects/SDC/tips-recommendations-service/csv-files/Postgres/restaurants-articles.csv' DELIMITER '|' CSV HEADER;
COPY indexes_knownFor (id, name, image) FROM '/mnt/c/Users/chand/Hack Reactor Projects/SDC/tips-recommendations-service/csv-files/Postgres/indexes_knownFor.csv' DELIMITER '|' CSV HEADER;
COPY indexes_articles (id, name, image) FROM '/mnt/c/Users/chand/Hack Reactor Projects/SDC/tips-recommendations-service/csv-files/Postgres/indexes_articles.csv' DELIMITER '|' CSV HEADER;