FROM mysql:8.0
COPY init.sql /docker-entrypoint-initdb.d/
COPY car_data.csv /docker-entrypoint-initdb.d/
COPY load_data.sql /docker-entrypoint-initdb.d/

