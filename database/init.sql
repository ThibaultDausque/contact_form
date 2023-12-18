CREATE DATABASE mydb;

USE mydb;

CREATE TABLE IF NOT EXISTS forms (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message VARCHAR(255) NOT NULL,
        PRIMARY KEY (id);

    );