---
title: Traefik
description: Traefik Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

No extra configuration is required.
The username and password are the same as used to login to the web interface.

Allowed fields: `["routers", "services", "middleware"]`.

```yaml
widget:
    type: traefik
    url: http://traefik.host.or.ip
    username: username
    password: password
```

*Added in v0.1.0*
