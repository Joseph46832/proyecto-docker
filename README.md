## Iniciar un swarm (En servidorUbuntu1)
docker swarm init --advertise-addr 192.168.100.2 



## En la carpeta raiz del proyecto contruimos las imagenes de los Dockerfile

docker build -t ms-usuarios ./MS-Usuarios
docker build -t ms-vehiculos ./MS-Vehiculos
docker build -t ms-calificaciones ./MS-Calificaciones
docker build -t ms-resenas ./MS-Reseñas
docker build -t frontend-app ./frontend

## Levantamos el compose 

docker swarm init --advertise-addr 192.168.100.2

docker stack deploy -c docker-compose.yml proyecto-docker

Y en teoria ya deberia de funciona (A excepcion haproxy esta aun en trabajo)
