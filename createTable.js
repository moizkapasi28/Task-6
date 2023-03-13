const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'employeechallenges'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), role VARCHAR(255), department VARCHAR(255), created_date timestamp default current_timestamp not null)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

  module.exports = con;