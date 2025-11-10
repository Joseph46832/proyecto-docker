import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "192.168.100.2",
  user: "josephsito",
  password: "123456789",
  database: "CalificacionesWeb",
  port: 3306
});

export default db;
