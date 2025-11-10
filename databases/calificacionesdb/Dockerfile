FROM mysql:8.0
COPY init.sql /docker-entrypoint-initdb.d/
COPY datos_calificaciones.csv /docker-entrypoint-initdb.d/
COPY load.sql /docker-entrypoint-initdb.d/

# Habilitamos LOAD DATA LOCAL INFILE y eliminamos restricción secure-file-priv
CMD ["mysqld", "--local-infile=1", "--secure-file-priv="]

