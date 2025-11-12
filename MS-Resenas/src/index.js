require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const reseñasRoutes = require('./Controllers/reseñasController');

const app = express();
app.use(morgan('dev'));

// CORS solo para el frontend en 192.168.100.3
app.use(cors({
  origin: "http://192.168.100.3",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use('/resenas', reseñasRoutes);

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Microservicio de Reseñas corriendo en http://localhost:${PORT}`);
});
