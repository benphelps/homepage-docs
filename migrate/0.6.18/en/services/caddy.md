---
title: Caddy
description: Caddy Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["upstreams", "requests", "requests_failed"]`.

```yaml
widget:
    type: caddy
    url: http://caddy.host.or.ip:adminport # default admin port is 2019
```

*Added in v0.6.18*
