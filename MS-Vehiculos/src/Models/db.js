const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '192.168.100.2',
    user: 'josephsito',  // Usuario, root por defecto.
    password: '123456789',  // cambia si tienes.
    port: 3306, // Puerto por defecto de MySQL
    database: 'VehiculosWeb'  // la base de datoss
});

module.exports = pool;
