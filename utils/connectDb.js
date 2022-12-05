const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "abdurrahaman",
    database: "seproj"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//con is of object type
module.exports = con;
