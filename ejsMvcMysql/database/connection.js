const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password:'',
  host: 'localhost',
  database: 'TesteDB',
});

module.exports = connection;