const mysql = require('mysql2');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'employeechallenges'
}) 

con.connect((err)=>{
    if(err) throw  err
    console.log('mysql connected')
})
module.exports = con;