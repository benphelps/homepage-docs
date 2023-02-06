---
title: Synology Disk Station
description: Synology Disk Station Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Note: the widget is not compatible with 2FA.

Allowed fields: `["uptime", "volumeAvailable", "resources.cpu", "resources.mem"]`.

```yaml
widget:
    type: diskstation
    url: http://diskstation.host.or.ip:port
    username: username
    password: password
```

*Added in v0.6.7*
