CREATE DATABASE IF NOT EXISTS UsuariosWeb;

CREATE TABLE IF NOT EXISTS UsuariosWeb.usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Crear usuario josephsito con permisos globales
CREATE USER IF NOT EXISTS 'josephsito'@'%' IDENTIFIED BY '123456789';
GRANT ALL PRIVILEGES ON UsuariosWeb.* TO 'josephsito'@'%';
FLUSH PRIVILEGES;

