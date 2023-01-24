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

*Note that in order to use the socket directly homepage must be running as root*

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
  server: my-docker # The docker server that was configured
  container: emby # The name of the container you'd like to connect
```

## Automatic Service Discovery

Homepage features automatic service discovery for containers with the proper labels attached, all configuration options can be applied using dot notation, beginning with `homepage`.

Below is an example of the same service entry shown above, as docker labels.

```yaml
services:
  emby:
    image: lscr.io/linuxserver/emby:latest
    container_name: emby
    ports:
      - 8096:8096
    restart: unless-stopped
    labels:
      - homepage.group=Media
      - homepage.name=Emby
      - homepage.icon=emby.png
      - homepage.href=http://emby.home/
      - homepage.description=Media server
```

When your Docker instance has been properly configured, this service will be automatically discovered and added to your Homepage.  **You do not need to specify the `server` or `container` values, as they will be automatically inferred.**

## Widgets

You may also configure widgets, along with the standard service entry, again, using dot notation.


```yaml
labels:
  - homepage.group=Media
  - homepage.name=Emby
  - homepage.icon=emby.png
  - homepage.href=http://emby.home/
  - homepage.description=Media server
  - homepage.widget.type=emby
  - homepage.widget.url=http://emby.home
  - homepage.widget.key=yourembyapikeyhere
  - homepage.widget.fields=["field1","field2"] # optional
```

## Docker Swarm

Docker swarm is supported and containers are specified with the same `server` and `container` notation. To enable swarm support you will need to include a `swarm` setting in your docker.yaml, e.g.

```yaml
my-docker:
  socket: /var/run/docker.sock
  swarm: true
```

## Caveats

Currently, there is no way to define rigid ordering when using service discovery, and the order will be determined by the order returned from the Docker API.  Discovered services take precedence over services defined in `services.yaml` and will show above them. You can still designate categories that include discovered and explicit services in a `layout` block in settings.yaml.
