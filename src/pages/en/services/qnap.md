---
title: QNAP
description: QNAP Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["cpuUsage", "memUsage", "systemTempC", "poolUsage"]`.

```yaml
widget:
    type: qnap
    url: http://qnap.host.or.ip:port
    username: user
    password: pass
```

*Added in v0.6.18*
