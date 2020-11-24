DROP DATABASE IF EXISTS social_db;
CREATE DATABASE social_db;

USE social_db;

CREATE TABLE User (
    userId INTEGER NOT NULL AUTO_INCREMENT,
    userName VARCHAR(50) NOT NULL,
    password VARCHAR(10) not null,
    biography VARCHAR(250),
    likedPosts integer,
    FOREIGN KEY (likedPosts) references Post(postId)    
    PRIMARY KEY (id)
);

CREATE TABLE Post (
    postId INTEGER NOT NULL AUTO_INCREMENT,
    postData VARCHAR(50) NOT NULL,
    postTags VARCHAR(250),
    userId integer not null,
    FOREIGN KEY (userId)References User(userId),     
    PRIMARY KEY (postId)
);