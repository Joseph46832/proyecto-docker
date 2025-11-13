## Pagina web - Reseñas de Carros 🏎️.

A continuación se encuentrá el paso a paso a reproducir para el lanzamiento de nuestra página web usando Docker 🐳.

### Paso 1: Clonar el repositorio ⬇️.

Para descargar git en linux, ubuntu:

Comandos:

```bash
sudo apt update
sudo apt install git
```

Para descargar git en MacOS

```bash
xcode-select --install
# Para verificar la descarga
git --version
```

A continuacion, cree una nueva carpeta vacia para clonar el respositorio.


Clonar el repositorio usando el siguiente enlace en la nueva carpeta:

```bash
git clone https://github.com/Joseph46832/proyecto-docker.git
```

### Paso 2: Virtual Machines 💻

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

### Paso 4: Descargar docker en ambas maquinas

A continuación encontrara los comandos necesarios para descar docker 

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Para verificar su descarga

```bash
sudo docker --version
```

### Paso 3: Iniciar cluster.

El siguiente comando inicia el cluster y dependiendo de la maquina donde se ejecute es quien queda como 'Leader'.
Ejemplo con servidorUbuntu1 (Recomendable usar este):

```bash
docker swarm init --advertise-addr 192.168.100.2
```
> La ip en este comando puede variar dependiendo de la IP de su maquina
> Usar el ticket que da al iniciar en el otro servidor para unirse al cluster.

### Paso 4: Ejecución 🚀.

El proyecto deberia encontrarse en la carpeta compartida /vagrant/

```bash
cd /vagrant/
```

En la raiz del proyecto ejecutar el siguiente comando para lanzar los contenedores con Docker Swarm.


```bash
docker stack deploy -c docker-compose.yml proyecto-docker
```

Para verificar:

```bash
docker service ls
```
> Con esto verificamos que el servicio de contenedores este activo al 100.
