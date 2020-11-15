CREATE DATABASE boilerplate;
\c boilerplate

CREATE TABLE users (
  user_id         SERIAL PRIMARY KEY,
  full_name       VARCHAR(50),
  email           VARCHAR(255),
  phone_number    VARCHAR(15),
  unique_id       VARCHAR(20),
  created_at      TIMESTAMPTZ DEFAULT Now() 
);

INSERT INTO users (full_name, email, phone_number, unique_id) 
  VALUES ('Michael', 'mic@hael.com', '123456789', 'mica');