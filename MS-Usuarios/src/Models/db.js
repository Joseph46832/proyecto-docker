const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'usuariosdb',
    user: 'josephsito',        // usuario MySQL (vacio de momento, se usa root)
    password: '123456789',        // contraseña (igual vacio)
    database: 'UsuariosWeb',
    port: 3306
});

module.exports = pool;
