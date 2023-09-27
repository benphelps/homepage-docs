---
title: QNAP
description: QNAP Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Allowed fields: `["cpuUsage", "memUsage", "systemTempC", "poolUsage", "volumeUsage"]`.

```yaml
widget:
    type: qnap
    url: http://qnap.host.or.ip:port
    username: user
    password: pass
```
If the QNAP device has multiple volumes, the *poolUsage* will be a sum of all volumes.

If only a single volume needs to be tracked, add the following to your configuration and the Widget will track this as *volumeUsage*:
```yaml
    volume: Volume Name From QNAP
```


*Added in v0.6.18*
