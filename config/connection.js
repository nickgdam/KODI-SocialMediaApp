const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Doggies66",
    database: "social_db",
  });
}


connection.connect(function(err) {
    if(err) {
        console.log("Error connection: " + err.stack);
        return false;
    }
    console.log("Database connected, connected as id :" + connection.threadId);
});

module.exports = connection;
