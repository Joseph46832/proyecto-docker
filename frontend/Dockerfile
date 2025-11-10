# Usar Nginx para servir el sitio estático
FROM nginx:stable-alpine

# Borrar los archivos por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar tu sitio al directorio público
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]

