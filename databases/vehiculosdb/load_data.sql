USE VehiculosWeb;

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/car_data.csv'
INTO TABLE autos
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(Modelo, Anio, Estado, Km, Precio_en_dolares, MSRP);

