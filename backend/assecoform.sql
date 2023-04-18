/*Creating a Database*/

CREATE DATABASE transferform;

/*Accessing the Database*/

USE DATABASE;

/*Creating a Database for the Transfer Form*/

CREATE TABLE
    form(
        id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
        description VARCHAR(200) NOT NULL,
        destination VARCHAR(200) NOT NULL,
        account VARCHAR(200) NOT NULL,
        amount INT NOT NULL
    ) COMMENT '';