---
title: Docker
description: Docker Configuration
layout: ../../../layouts/MainLayout.astro
---

Docker instances are configured inside the `docker.yaml` file. Both IP:PORT and Socket connections are supported.

## Using Docker Socket Proxy

Due to security concerns with exposing the docker socket directly, you can use a [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) container to expose the docker socket on a more restricted and secure API.

Here is an example docker-compose file that will expose the docker socket, and then connect to it from the homepage container:

```yaml
dockerproxy:
    image: ghcr.io/tecnativa/docker-socket-proxy:latest
    container_name: dockerproxy
    environment:
        - CONTAINERS=1 # Allow access to viewing containers
        - POST=0 # Disallow any POST operations (effectively read-only)
    ports:
        - 2375:2375
    volumes:
        - /var/run/docker.sock:/var/run/docker.sock:ro # Mounted as read-only
    restart: unless-stopped

homepage:
    image: ghcr.io/benphelps/homepage:latest
    container_name: homepage
    volumes:
        - /path/to/config:/app/config
    ports:
        - 3000:3000
    restart: unless-stopped
```

Then, inside of your `docker.yaml` settings file, you'd configure the docker instance like so:

```yaml
my-docker:
    host: dockerproxy
    port: 2375
```

## Using Socket Directly

If you'd rather use the socket directly, first make sure that you're passing the local socket into the Docker container.

```yaml
homepage:
    image: ghcr.io/benphelps/homepage:latest
    container_name: homepage
    volumes:
        - /path/to/config:/app/config
        - /var/run/docker.sock:/var/run/docker.sock # pass local proxy
    ports:
        - 3000:3000
    restart: unless-stopped
```

If you're using `docker run`, this would be `-v /var/run/docker.sock:/var/run/docker.sock`.

Then, inside of your `docker.yaml` settings file, you'd configure the docker instance like so:

```yaml
my-docker:
    socket: /var/run/docker.sock
```

## Services

Once you've configured your docker instances, you can then apply them to your services, to get stats and status reporting shown.

Inside of the service you'd like to connect to docker:

```yaml
- Emby:
  icon: emby.png
  href: "http://emby.home/"
  description: Media server
  server: my-local-docker # The docker server that was configured
  container: emby # The name of the container you'd like to connect
```
