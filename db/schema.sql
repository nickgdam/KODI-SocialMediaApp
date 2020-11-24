DROP DATABASE IF EXISTS social_db;

CREATE DATABASE social_db;

USE social_db;

CREATE TABLE User
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	password varchar(28) NOT NULL,
	biography varchar (255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Post
(
	id int NOT NULL AUTO_INCREMENT,
	post_name varchar(255) NOT NULL,
	post_content varchar(255) NOT NULL,
	post_tags int NOT NULL,
	user_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES User(id)
);
