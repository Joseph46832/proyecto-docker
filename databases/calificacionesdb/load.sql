USE CalificacionesWeb;

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/datos_calificacione.csv'
INTO TABLE calificaciones
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(@carroId, @estrellas, @creadoEn)
SET
  carroId = @carroId,
  estrellas = @estrellas,
  creadoEn = STR_TO_DATE(@creadoEn, '%Y-%m-%d %H:%i:%s');

