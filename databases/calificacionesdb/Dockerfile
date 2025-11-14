FROM mysql:8.0

COPY my.cnf /etc/mysql/conf.d
COPY init.sql /docker-entrypoint-initdb.d/
COPY datos_calificacione.csv /docker-entrypoint-initdb.d/
COPY load.sql /docker-entrypoint-initdb.d/
COPY prueba.txt /prueba/

