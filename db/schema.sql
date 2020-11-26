DROP DATABASE IF EXISTS social_db;

CREATE DATABASE social_db;

USE social_db;

<<<<<<< HEAD
CREATE TABLE user (
    userId INTEGER NOT NULL AUTO_INCREMENT,
    userName VARCHAR(50) NOT NULL,
    password VARCHAR(10) not null,
    biography VARCHAR(250),
    likedPosts integer,
    PRIMARY KEY (userId)

);

CREATE TABLE post (
    postId INTEGER NOT NULL AUTO_INCREMENT,
    postData VARCHAR(50) NOT NULL,
    postTags VARCHAR(250),
    userId integer not null,
    FOREIGN KEY (userId)References User(userId),  
    PRIMARY KEY (postId)
    
);
=======

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
>>>>>>> dc9259f70a8455ba888bd3a8592afb8a48964c8e
