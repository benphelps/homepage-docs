---
title: Installation
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

You have a few options for deploying homepage, depending on your needs. We offer docker images for a majority of platforms. You can also install and run homepage from source if Docker is not your thing.

### With Docker Compose

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

### With Docker Run

```bash
docker run -p 3000:3000 -v /path/to/config:/app/config -v /var/run/docker.sock:/var/run/docker.sock ghcr.io/benphelps/homepage:latest
```

### From Source

First, clone the repository:

```bash
git clone https://github.com/benphelps/homepage.git
```

Then install dependencies and build the production bundle (I'm using pnpm here, you can use npm or yarn if you like):

```bash
pnpm install
pnpm build
```

If this is your first time starting, copy the `src/skeleton` directory to `config/` to populate initial example config files.

Finally, run the server:

```bash
pnpm start
```
