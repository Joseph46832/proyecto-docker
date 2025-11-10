FROM mysql:8.0

# Copiamos los scripts y el CSV
COPY init.sql /docker-entrypoint-initdb.d/
COPY car_data.csv /docker-entrypoint-initdb.d/
COPY load.sql /docker-entrypoint-initdb.d/

# Habilitamos LOAD DATA LOCAL INFILE y eliminamos restricción secure-file-priv
CMD ["mysqld", "--local-infile=1", "--secure-file-priv="]

