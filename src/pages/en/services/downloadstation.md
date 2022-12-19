---
title: Synology Download Station
description: Synology Download Station Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Note: the widget is not compatible with 2FA.

Allowed fields: `["leech", "download", "seed", "upload"]`.

```yaml
widget:
    type: diskstation
    url: http://diskstation.host.or.ip:port
    username: username
    password: password
```

*Added in v0.5.3*
