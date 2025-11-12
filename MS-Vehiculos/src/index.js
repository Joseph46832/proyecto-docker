const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const vehiculosController = require('./Controllers/vehiculosController');
const publicacionesController = require('./Controllers/publicacionesController');

const app = express();

// Servir archivos estáticos
app.use('/images', express.static(path.join(__dirname, '../public/images')));

app.use(morgan('dev'));

// CORS solo para el frontend en 192.168.100.3
app.use(cors({
  origin: "http://192.168.100.3",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use('/vehiculos', vehiculosController);
app.use('/publicaciones', publicacionesController);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Microservicio ejecutándose en puerto ${PORT}`);
});
