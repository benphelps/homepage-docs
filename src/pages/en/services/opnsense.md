---
title: OPNSense
description: OPNSense Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

API key / secret can be generated via the admin, see [the opnsense docs](https://docs.opnsense.org/development/how-tos/api.html#creating-keys).

Allowed fields: `["uptime", "cpu", "memory", "wanUpload", "wanDownload"]`.

```yaml
widget:
    type: opnsense
    url: http://opnsense.host.or.ip
    username: apikey
    password: apisecret
```

*Added in v0.5.6*
