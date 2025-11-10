USE VehiculosWeb;

LOAD DATA INFILE '/docker-entrypoint-initdb.d/car_data_5500.csv'
INTO TABLE autos
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(Modelo, Anio, Estado, Km, Precio_en_dolares, MSRP);

