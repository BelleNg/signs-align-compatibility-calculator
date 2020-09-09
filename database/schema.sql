DROP DATABASE IF EXISTS signs_align;

CREATE DATABASE signs_align;

USE signs_align;

-- Create tables: categories, products, photos
CREATE TABLE zodiac (
  id int NOT NULL, animal varchar(15) NOT NULL, Primary KEY (id)
  );

-- Seeding the database
-- INSERT INTO zodiac (id, animal) VALUES (1995, "pig");
