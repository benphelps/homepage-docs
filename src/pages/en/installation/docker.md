---
title: Docker Installation
description: Install and run homepage from Docker
layout: ../../../layouts/MainLayout.astro
---

Using docker compose:

```yaml
version: "3.3"
services:
  homepage:
    image: ghcr.io/benphelps/homepage:latest
    container_name: homepage
    ports:
      - 3000:3000
    volumes:
      - /path/to/config:/app/config # Make sure your local config directory exists
      - /var/run/docker.sock:/var/run/docker.sock # (optional) For docker integrations
```

### Running as non-root

By default, the Homepage container runs as root.  Homepage also supports running your container as non-root via the standard `PUID` and `PGID` environment variables.  When using these variables, make sure that any volumes mounted in to the container have the correct ownership and permissions set.

_Using the docker socket directly is not the commended method of integration and requires either running homepage as root or that the user be part of the docker group_

In the docker compose example below, the environment variables `$PUID` and `$PGID` are set in a `.env` file.

```yaml
version: "3.3"
services:
  homepage:
    image: ghcr.io/benphelps/homepage:latest
    container_name: homepage
    ports:
      - 3000:3000
    volumes:
      - /path/to/config:/app/config # Make sure your local config directory exists
      - /var/run/docker.sock:/var/run/docker.sock # (optional) For docker integrations, see alternative methods
    environment:
      PUID: $PUID
      PGID: $PGID
```

### With Docker Run

```bash
docker run -p 3000:3000 -v /path/to/config:/app/config -v /var/run/docker.sock:/var/run/docker.sock ghcr.io/benphelps/homepage:latest
```
