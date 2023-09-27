---
title: Adguard Home
description: Adguard Home Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

The username and password are the same as used to login to the web interface.

Allowed fields: `["queries", "blocked", "filtered", "latency"]`.

```yaml
widget:
    type: adguard
    url: http://adguard.host.or.ip
    username: admin
    password: password
```

*Added in v0.3.51*
