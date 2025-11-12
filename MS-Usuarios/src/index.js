const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const usuariosControl = require('./Controllers/usuariosController');

const app = express();
app.use(morgan('dev'));

// Permitir solo el frontend en 192.168.100.3
app.use(cors({
  origin: "http://192.168.100.3",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Rutas del microservicio usuarios
app.use('/usuarios', usuariosControl);

app.listen(3001, () => {
  console.log('Microservicio de Usuarios ejecutándose en el puerto 3001');
});
