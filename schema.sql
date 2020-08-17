DROP DATABASE IF EXISTS zagatTips;

CREATE DATABASE zagatTips;

-- ---
-- Globals
-- ---
USE zagatTips;
-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Restaurants'
--
-- ---

DROP TABLE IF EXISTS `Restaurants`;

CREATE TABLE `Restaurants` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `restaurant_name` VARCHAR(255) NULL DEFAULT NULL,
  `dish_name1` VARCHAR(255) NULL DEFAULT NULL,
  `dish_image1` VARCHAR(255) NULL DEFAULT NULL,
  `dish_name2` VARCHAR(255) NULL DEFAULT NULL,
  `dish_image2` VARCHAR(255) NULL DEFAULT NULL,
  `dish_name3` VARCHAR(255) NULL DEFAULT NULL,
  `dish_image3` VARCHAR(255) NULL DEFAULT NULL,
  `tip` VARCHAR(255) NULL DEFAULT NULL,
  `features` VARCHAR(255) NULL DEFAULT NULL,
  `tags` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Articles'
--
-- ---

DROP TABLE IF EXISTS `Articles`;

CREATE TABLE `Articles` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `url` VARCHAR(255) NULL DEFAULT NULL,
  `tags` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Restaurants` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Articles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Restaurants` (`id`,`dish_name1`,`dish_image1`,`dish_name2`,`dish_image2`,`dish_name3`,`dish_image3`,`tip`,`features`,`tags`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `Articles` (`id`,`name`,`image`,`url`,`tags`) VALUES
-- ('','','','','');