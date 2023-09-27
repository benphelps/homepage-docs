---
title: Uptime Kuma
description: Uptime Kuma Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

As Uptime Kuma does not yet have a full API the widget uses data from a single "status page". As such you will need a status page setup with a group of monitored sites, which is where you get the slug (without the `/status/` portion).

Allowed fields: `["up", "down", "uptime", "incident"]`.

```yaml
widget:
    type: uptimekuma
    url: http://uptimekuma.host.or.ip:port
    slug: statuspageslug
```

*Added in v0.6.5*
