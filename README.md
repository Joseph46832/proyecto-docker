## Pagina web - Reseñas de Carros 🏎️.

A continuación se encuentrá el paso a paso a reproducir para el lanzamiento de nuestra página web usando Docker 🐳.

### Paso 1: Virtual Machines 💻

Levantar las 2 maquinas virtuales con el vagrantfile adjunto a este repositorio con el siguiente comando:

```bash
# Comando:
vagrant up
```
> Puede crear y/o usar unas propias si asi lo considera también.

Posteriormente abrir 2 terminales en su maquina host y entrar a las maquinas.
Ejemplo:

```bash
# Ejemplo con servidorUbuntu1
vagrant ssh servidorUbuntu1
```

### Paso 2: Clonar el repositorio ⬇️.

Nota: Importante, tener descargado git en cada maquina.

Comandos:

```bash
sudo apt update
sudo apt install git
```

Clonar el repositorio usando el siguiente enlace:

```bash
git clone https://github.com/Joseph46832/proyecto-docker.git
```

### Paso 3: Iniciar cluster.

El siguiente comando inicia el cluster y dependiendo de la maquina donde se ejecute es quien queda como 'Leader'.
Ejemplo con servidorUbuntu2:

```bash
docker swarm init --advertise-addr 192.168.100.2
```
> Usar el ticket que da al iniciar en el otro servidor para unirse al cluster.

### Paso 4: Ejecución 🚀.

En la raiz del proyecto ejecutar el siguiente comando para lanzar los contenedores con Docker Swarm.

```bash
docker stack deploy -c docker-compose.yml proyecto-docker
```

Para verificar:

```bash
docker service ls
```
> Con esto verificamos que el servicio de contenedores este activo al 100.
