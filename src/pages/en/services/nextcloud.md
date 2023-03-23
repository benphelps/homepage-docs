---
title: Nextcloud
description: Nextcloud Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Create an app password under `Settings > Personal > Security > Devices & sessions`.

Allowed fields: `["cpuload", "memoryusage", "freespace", "activeusers"]`.

```yaml
widget:
    type: nextcloud
    url: https://nexcloud.host.or.ip:port
    username: username
    password: password
```

*Added in v0.6.8*
