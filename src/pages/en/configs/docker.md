---
title: Docker
description: Docker Configuration
layout: ../../../layouts/MainLayout.astro
---

Docker instances are configured inside the `docker.yaml` file. Both IP:PORT and Socket connections are supported.

For IP:PORT, simply make sure your Docker instance [has been configured](https://gist.github.com/styblope/dc55e0ad2a9848f2cc3307d4819d819f) to accept API traffic over the HTTP API.

```yaml
my-remote-docker:
  host: 192.168.0.101
  port: 2375
```

For Sockets, make sure that you're passing the local socket into the Docker container (if you're running inside of Docker).

```yaml
my-local-docker:
  socket: /var/run/docker.sock
```

and inside of your Docker Compose:

```yaml
homepage:
  image: ghcr.io/benphelps/homepage:main
  container_name: homepage
  volumes:
    - /path/to/config:/app/config
    - /var/run/docker.sock:/var/run/docker.sock # This passes your local docker socket to the container
  ports:
    - 3000:3000
  restart: unless-stopped
```

of if you're using `docker run`, add `-v /var/run/docker.sock:/var/run/docker.sock`

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
