DROP DATABASE IF EXISTS social_db;
CREATE DATABASE social_db;

USE social_db;

CREATE TABLE User (
    userId INTEGER NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    biography VARCHAR(250),
    likedPosts integer not null,
    FOREIGN KEY (likedPosts)    
    PRIMARY KEY (id)
);

CREATE TABLE Post (
    postId INTEGER NOT NULL AUTO_INCREMENT,
    postData VARCHAR(50) NOT NULL,
    postTags VARCHAR(250),
    FOREIGN KEY (userId)     
    PRIMARY KEY (postId)
);