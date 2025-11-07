// app.js
import express from "express";
import morgan from "morgan";
import cors from "cors";
import calificacionesRoutes from "./routes/calificacionesRoutes.js";

const app = express();

// --- CORS (habilita cualquier origen para desarrollo / Docker Swarm)
const corsOptions = {
  origin: true, // permite todos los orígenes
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// --- Manejo de preflight OPTIONS
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

// --- Logging y parseo de JSON
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Rutas de Calificaciones
app.use("/calificaciones", calificacionesRoutes);

// --- Exportar app
export default app;

