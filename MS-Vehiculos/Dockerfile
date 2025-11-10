# Imagen base oficial de Node.js
FROM node:18-alpine

# Crear el directorio de la app dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias primero (mejor para cache)
COPY package*.json ./

# Instalar dependencias de producción
RUN npm install --only=production

# Copiar el resto del código
COPY . .

# Exponer el puerto (ajústalo si tu servicio usa otro)
EXPOSE 3004

# Comando para arrancar el servidor
CMD ["node", "src/index.js"]

