# Poorman Cloud

- Setup Hetzner
    - Create cloud
    - Add SSH key
    - Firewall
    - Server
    - Setup local SSH
    - Internal network
- Setup Cloudflare
    - Create DNS A record => server IP
    - CNAME => root domain
- Setup Server

```shell
sudo apt update
sudo apt upgrade -y
docker swarm init --advertise-addr 10.0.0.2 #$INTERNAL_NETWORK_SERVER_IP
```
- Create external network
```shell
docker network create --driver overlay traefik-public
```

- Setup folders
```shell
mkdir /mnt/data && \
mkdir /mnt/data/traefik && \
touch /mnt/data/traefik/acme.json && \
chmod 600 /mnt/data/traefik/acme.json && \
mkdir /mnt/data/portainer
```

- Setup auth for Traefik

```shell
docker run --rm httpd:2.4-alpine htpasswd -nbB admin <password> | cut -d ":" -f 2
```

- Deploy
```shell
docker stack deploy ~/stacks/poorman-stack.yml
```

```shell
docker swarm join --token SWMTKN-1-4x3krg4w47l3yia9e2f0cmhl0rpxa5sbmlhl4l7yja2ju7mh66-2mz2y1vy5z6xz9fxnn7ibqol2 10.0.0.2:2377
```
