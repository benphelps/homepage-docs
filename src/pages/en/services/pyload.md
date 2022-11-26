---
title: Pyload
description: Pyload Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["speed", "active", "queue", "total"]`.

```yaml
widget:
    type: pyload
    url: http://pyload.host.or.ip:port
    username: username
    password: password # only needed if set
```

*Added in v0.5.0*
