import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "calificacionesdb",
  user: "josephsito",
  password: "123456789",
  database: "CalificacionesWeb",
  port: 3306,
  ssl: {
    rejectUnauthorized: false // 🔥 Desactiva la verificación SSL
  }
});

export default db;

