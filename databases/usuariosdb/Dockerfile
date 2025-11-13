FROM mysql:8.0

COPY datos_usuarios.csv /docker-entrypoint-initdb.d/
COPY my.cnf /etc/mysql/conf.d
COPY init.sql /docker-entrypoint-initdb.d/
COPY load.sql /docker-entrypoint-initdb.d/
