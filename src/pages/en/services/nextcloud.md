---
title: Nextcloud
description: Nextcloud Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Find your API key under `Settings > General`.

Allowed fields: `["cpuload", "memoryusage", "freespace", "activeusers"]`.

```yaml
widget:
    type: nextcloud
    url: https://nexcloud.host.or.ip:port
    username: username
    password: password
```

*Added in v0.6.8*
