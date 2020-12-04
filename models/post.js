// var db = require("./models");

module.exports = function(sequelize, DataTypes) {
    const Posts = sequelize.define("Posts", {
      // The email cannot be null, and must be a proper email before creation
      post_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // The password cannot be null
      post_content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_tags: {
          type:DataTypes.STRING,
          allowNULL: false
      },
     
    });
    
    
    
    return Posts;
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
};