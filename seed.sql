DROP DATABASE IF EXISTS back_end_review;
CREATE DATABASE back_end_review;

\c back_end_review;


 CREATE TABLE genres(
  id INT REFERENCES movies(genre_id),
  name VARCHAR NOT NULL
);
