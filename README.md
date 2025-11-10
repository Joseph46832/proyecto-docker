## Iniciar un swarm (En servidorUbuntu1)
docker swarm init --advertise-addr 192.168.100.2 

(asi como esta pegar y enter)

## Levantamos el compose 

docker swarm init --advertise-addr 192.168.100.2

Luego toca ingresar el token de join al swarm al Ubuntu2

docker stack deploy -c docker-compose.yml proyecto-docker

Y en teoria ya deberia de funcionar
