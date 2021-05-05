DROP DATABASE IF EXISTS TesteDB;
CREATE DATABASE IF NOT EXISTS TesteDB;

USE TesteDB;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  
  PRIMARY KEY (id)
);

INSERT INTO users (name, email) VALUES
  ("Vinicius Vasaconcelos", "vinicius@email.com.br"),
  ("Leandro Almeira", "leandro@email.com.br"),
  ("Junior", "junior@email.com.br");