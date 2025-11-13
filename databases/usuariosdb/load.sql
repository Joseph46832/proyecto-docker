USE UsuariosWeb;

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/datos_usuarios.csv'
INTO TABLE usuarios
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(username, email, password);

