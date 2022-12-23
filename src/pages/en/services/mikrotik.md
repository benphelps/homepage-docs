---
title: Mikrotik
description: Mikrotik Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["uptime", "cpuLoad", "memoryUsed", "numberOfLeases"]`.

```yaml
widget:
    type: mikrotik
    url: http://mikrotik.host.or.ip
    username: username
    password: password
```

*Added in v0.5.6*
