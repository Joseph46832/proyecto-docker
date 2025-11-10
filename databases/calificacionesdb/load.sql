USE CalificacionesWeb;

LOAD DATA INFILE '/docker-entrypoint-initdb.d/datos_calificaciones.csv'
INTO TABLE calificaciones
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(@carroId, @estrellas, @creadoEn)
SET
  carroId = @carroId,
  estrellas = @estrellas,
  creadoEn = STR_TO_DATE(@creadoEn, '%m/%d/%Y %H:%i');
