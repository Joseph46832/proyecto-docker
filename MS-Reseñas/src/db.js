require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "192.168.100.2",
  user: "josephsito",
  password: "123456789",
  database: "CalificacionesWeb",
  port: 3306
});

module.exports = pool;

