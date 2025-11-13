USE ResenasWeb;

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/datos_resenas.csv'
INTO TABLE resenas
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(username, idVehiculo, comentario, @fecha)
SET fecha = STR_TO_DATE(@fecha, '%c/%e/%Y %H:%i');
